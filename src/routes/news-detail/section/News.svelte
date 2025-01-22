<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // استفاده از store برای دسترسی به URL
	import Papa from 'papaparse';

	let news = [];
	let group = '';

	// واکنش به تغییرات URL
	$: group = $page.url.searchParams.get('g'); // واکنش به تغییرات پارامتر g

	// تابع برای بارگذاری اخبار
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
					// فیلتر اخبار بر اساس پارامتر g
					if (group) {
						news = result.data.filter((item) => item.group === group); // فقط اخبار مربوط به گروه
					} else {
						news = result.data.slice(-4).reverse(); // در صورت عدم وجود پارامتر g، آخرین 4 خبر را نمایش می‌دهد
					}
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

<section>
	<div class="mx-auto p-4 lg:max-w-4xl">
		<div class="archive mt-4 flex items-center md:mt-0">
			<span class="sub selected">
				<a href="/news">Latest News</a>
			</span>
			<span class="sub">
				<a href="/news?g=event">Events</a>
			</span>
			<span class="sub">
				<a href="/news?g=updates">Enigmia.ai Updates</a>
			</span>
		</div>
		<!-- News Items -->
		<div class="item news grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
			{#each news as item}
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

	.sub a {
		text-decoration: none;
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
