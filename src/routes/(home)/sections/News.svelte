<script>
	import { onMount } from 'svelte';
	import Papa from 'papaparse';

	let news = [];

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
					// Only keep the last 4 items
					news = result.data.slice(-4).reverse();
				},
				error: (error) => {
					console.error('Error parsing CSV:', error.message);
				}
			});
		} catch (error) {
			console.error('Error during fetch or parse:', error.message);
		}
	}

	onMount(() => {
		loadNews();
	});
</script>

<section class="dark">
	<div class="shrinked mx-auto px-4">
		<div class="text-center md:order-2 md:col-span-7 md:grid-cols-2 md:text-left">
			<h2>Latest News</h2>
			<h3>Latest News</h3>
		</div>

		<div class="item grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each news as item}
				<a
					href={`/news-detail?file=${item.content_file}`}
					class="news-item transform cursor-pointer rounded-lg p-4"
					role="button"
					tabindex="0"
				>
					<img
						src={`/data/img/${item['img']}`}
						alt={item['title']}
						class="mb-2 h-auto w-full rounded-md"
					/>
					<h3 class="title">
						{item['title']}
					</h3>
					<p class="date-tag">
						<img src="date.svg" alt="" class="social-icon" />
						{item['date']}
					</p>

					<!-- <p class="summary">{item['summary']}</p> -->
				</a>
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
		transition: background-color 0.5s ease;
	}
	.news-item:hover {
		background-color: var(--red-brown-600);
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
