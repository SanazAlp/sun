<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { marked } from 'marked';
	import Papa from 'papaparse';

	let news = [];
	let recentNews = [];
	let newsContent = '';
	let file = '';
	let title = '';
	let imgSrc = '';
	let date = '';
	let summary = '';
	let group = '';

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
					const params = $page.url.searchParams;
					file = params.get('file');
					group = params.get('g');

					if (file) {
						const newsItem = result.data.find((item) => item.content_file === file);
						if (newsItem) {
							title = newsItem.title;
							imgSrc = `/data/img/${newsItem.img}`;
							date = newsItem.date;
							summary = newsItem.summary;
							group = newsItem.group;
						}
						loadNewsContent(file);
					}

					// همواره ۴ خبر اخیر را جداگانه نگه می‌داریم
					recentNews = result.data.slice(-4).reverse();

					// فیلتر اخبار برای گروه خاص اگر وجود داشته باشد
					if (group && !file) {
						news = result.data.filter((item) => item.group === group);
					} else if (!file) {
						news = result.data;
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

	// تابع برای بارگذاری محتوای خبر خاص
	async function loadNewsContent(file) {
		try {
			const response = await fetch(`/data/news/${file}.md`);
			if (!response.ok) {
				throw new Error(`Error fetching news content: ${response.status} ${response.statusText}`);
			}
			const markdown = await response.text();
			newsContent = marked(markdown);
		} catch (error) {
			console.error('Error during fetch:', error.message);
		}
	}

	function handleClick(file) {
		history.pushState({}, '', `?file=${file}`);
		location.reload(); // صفحه را ریلود می‌کند
	}

	onMount(() => {
		loadNews();
	});

	// واکنش به تغییرات URL
	page.subscribe(() => {
		const params = $page.url.searchParams;
		const newFile = params.get('file');
		if (newFile !== file) {
			file = newFile;
			loadNewsContent(file);
		}
	});
</script>

<section>
	{#if file}
		<!-- نمایش جزئیات خبر -->
		<div class="news-details mx-auto max-w-4xl p-4">
			<p class="group">ENIGMIA.AI {group}</p>
			<h2>{title}</h2>
			<p>{summary}</p>
			<p class="date-tag">
				<img src="date.svg" alt="" class="social-icon" />
				{date}
			</p>
			<!-- share button -->
			<div class="social-icons share mt-4 flex items-center justify-between md:mt-0">
				<p>Share This!</p>
				<div class="flex space-x-4">
					<a
						href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + $page.url.href)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="whatsapp.svg" alt="WhatsApp" class="social-icon" />
					</a>
					<a
						href={`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent($page.url.href)}`}
						target="_blank"
						aria-label="X (formerly Twitter)"
					>
						<img src="x.svg" alt="X Icon" class="social-icon" />
					</a>
					<a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent($page.url.href)}`}
						target="_blank"
						aria-label="LinkedIn"
					>
						<img src="linkedin.svg" alt="LinkedIn" class="social-icon" />
					</a>
				</div>
			</div>
			<img src={imgSrc} alt={title} class="news-image" />
			<div class="content">
				{@html newsContent}
			</div>
		</div>
	{/if}

	<!-- همواره نمایش چهار خبر اخیر -->
	<div class="mx-auto p-4 lg:max-w-4xl">
		<h3>Latest News</h3>
		<div class="item news grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
			{#each recentNews as item}
				<button
					on:click={() => handleClick(item.content_file)}
					class="news-item flex transform cursor-pointer items-center rounded-lg p-4"
					tabindex="0"
				>
					<div class="mr-6">
						<h3 class="title">{item['title']}</h3>
						<p class="date-tag">
							<img src="date.svg" alt="" class="social-icon" />
							{item['date']}
						</p>
					</div>
					<img
						src={`/data/img/${item['img']}`}
						alt={item['title']}
						class="mb-0 ml-auto mt-0 h-auto w-48 rounded-md"
					/>
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
	.content {
		white-space: pre-wrap;
	}

	.news-image {
		width: 100%;
		height: auto;
		margin-bottom: 1rem;
		object-fit: cover;
		border-radius: 12px;
	}
	.share {
		border-bottom: solid 0.5px var(--red-brown-700);
		border-top: solid 0.5px var(--red-brown-700);
		padding: 15px 0 15px 0;
		margin-bottom: 20px;
	}

	.social-icons {
		display: flex;
		gap: 10px;
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
	.group {
		font-size: 1rem;
		text-transform: uppercase;
	}
	.date-tag {
		display: inline-flex;
		font-size: medium;
		color: var(--orange-500);
		margin: 1rem 0 1rem 0;
	}
	.date-tag img {
		margin-right: 15px;
	}
</style>
