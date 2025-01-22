<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Papa from 'papaparse';
	import { goto } from '$app/navigation';

	let news = [];
	let filteredNews = [];
	let paginatedNews = [];
	let groupFilter = '';
	let currentPage = 1;
	const itemsPerPage = 10;

	function handleClick(group) {
		const currentPath = window.location.pathname;
		const newUrl = group ? `${currentPath}?g=${group}` : currentPath;
		goto(newUrl);
	}

	async function loadNews() {
		try {
			const response = await fetch('/data/news.csv');
			if (!response.ok) {
				console.error('Error fetching news.csv:', response.status, response.statusText);
				return;
			}
			const text = await response.text();

			Papa.parse(text, {
				header: true,
				dynamicTyping: true,
				complete: (result) => {
					console.log('Parsed CSV Data:', result.data);
					news = result.data.reverse();
					filterNews();
				},
				error: (error) => {
					console.error('Error parsing CSV:', error.message);
				}
			});
		} catch (error) {
			console.error('Error during fetch or parse:', error.message);
		}
	}

	function filterNews() {
		if (groupFilter) {
			filteredNews = news.filter((item) => item.group === groupFilter);
		} else {
			filteredNews = news;
		}
		paginateNews();
	}

	function paginateNews() {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		paginatedNews = filteredNews.slice(startIndex, endIndex);
	}

	function goToPage(pageNumber) {
		currentPage = pageNumber;
		paginateNews();
	}

	page.subscribe(($page) => {
		groupFilter = $page.url.searchParams.get('g') || '';
		currentPage = 1; // Reset page number when the filter changes
		filterNews();
	});

	onMount(() => {
		loadNews();
	});
</script>

<section>
	<div class="mx-auto p-4 lg:max-w-4xl">
		<div class="archive mt-4 flex items-center md:mt-0">
			<span class="sub {$page.url.searchParams.get('g') == '' ? 'selected' : ''}">
				<a href="javascript:void(0)" on:click={() => handleClick('')}>Latest News</a>
			</span>
			<span class="sub {$page.url.searchParams.get('g') === 'event' ? 'selected' : ''}">
				<a href="javascript:void(0)" on:click={() => handleClick('event')}>Events</a>
			</span>
			<span class="sub {$page.url.searchParams.get('g') === 'updates' ? 'selected' : ''}">
				<a href="javascript:void(0)" on:click={() => handleClick('updates')}>Enigmia.ai Updates</a>
			</span>
		</div>

		<!-- News Items -->
		<div class="item news grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
			{#each paginatedNews as item}
				<a
					href={`/news-detail?file=${item.content_file}`}
					class="news-item flex transform cursor-pointer items-center rounded-lg p-4"
					role="button"
					tabindex="0"
				>
					<!-- Text on the left -->
					<div class="mr-6">
						<h3 class="title">{item['title']}</h3>
						<p class="date-tag">
							<img src="date.svg" alt="" class="social-icon" />
							{item['date']}
						</p>
					</div>
					<!-- Image on the right -->
					<img
						src={`/data/img/${item['img']}`}
						alt={item['title']}
						class="mb-0 ml-auto mt-0 h-auto w-48 rounded-md"
						style="margin-top: auto; margin-bottom: auto;"
					/>
				</a>
			{/each}
		</div>

		<!-- Pagination Controls -->
		<div class="pagination mt-4 flex justify-center">
			{#each Array(Math.ceil(filteredNews.length / itemsPerPage)).fill(0) as _, index}
				<button
					class="hover:var(--red-brown-500) mx-1 rounded bg-PrimaryButton px-2 py-1 text-white"
					on:click={() => goToPage(index + 1)}
				>
					{index + 1}
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.item {
		padding-top: 3rem;
	}
	.news-item {
		background-color: var(--red-brown-500);
		border-color: var(--red-brown-400);
		border-width: 1px;
		max-height: 400px;
		overflow: hidden;
		padding-bottom: 30px;
		text-decoration: none !important;
	}
	.news-item:hover {
		background-color: var(--red-brown-600);
	}
	.news {
		padding-bottom: 30px;
	}
	.archive {
		border-bottom: solid 0.5px var(--red-brown-700);
		border-top: solid 0.5px var(--red-brown-700);
		padding: 15px 0 15px 0;
		margin-bottom: 20px;
	}
	.sub {
		margin-right: 15px;
		background-color: var(--red-brown-500);
		padding: 10px;
		border-radius: 20px;
	}
	.sub:hover {
		background-color: var(--red-brown-600);
	}
	.selected {
		background-color: var(--red-brown-600) !important;
	}
	.social-icon {
		width: 20px;
		height: 20px;
		transition: transform 0.3s ease;
		filter: invert(83%) sepia(29%) saturate(567%) hue-rotate(337deg) brightness(96%) contrast(87%);
	}

	.social-icon:hover {
		transform: scale(1.2);
	}
	.date-tag {
		display: inline-flex;
		font-size: 0.9rem;
		color: var(--orange-500);
		margin: 1rem 0 1rem 0;
	}
	.date-tag img {
		margin: 1px 15px 0 0;
	}
</style>
