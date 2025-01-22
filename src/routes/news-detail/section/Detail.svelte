<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { marked } from 'marked';
	import Papa from 'papaparse';

	let newsContent = '';
	let file = '';
	let title = '';
	let imgSrc = '';
	let date = '';
	let summary = '';
	let group = '';

	onMount(() => {
		const params = $page.url.searchParams;
		file = params.get('file');

		if (!file) {
			console.error('No file specified in query parameters');
			return;
		}

		fetch(`/data/news/${file}.md`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error fetching news content: ${response.status} ${response.statusText}`);
				}
				return response.text();
			})
			.then((markdown) => {
				newsContent = marked(markdown);
			})
			.catch((error) => {
				console.error('Error during fetch:', error.message);
			});
		fetch('/data/news.csv')
			.then((response) => response.text())
			.then((csvText) => {
				Papa.parse(csvText, {
					header: true,
					dynamicTyping: true,
					complete: (result) => {
						const newsItem = result.data.find((item) => item.content_file === `${file}`);
						if (newsItem) {
							title = newsItem.title;
							imgSrc = `/data/img/${newsItem.img}`;
							date = newsItem.date;
							summary = newsItem.summary;
							group = newsItem.group;
						}
					},
					error: (error) => {
						console.error('Error parsing CSV:', error.message);
					}
				});
			})
			.catch((error) => {
				console.error('Error during fetch or parse:', error.message);
			});
	});

	function sharePost() {
		if (navigator.share) {
			navigator
				.share({
					title: title,
					text: summary,
					url: $page.url.href
				})
				.then(() => console.log('Shared successfully'))
				.catch((error) => console.error('Error sharing:', error));
		} else {
			alert('Your browser does not support.');
		}
	}
</script>

<section>
	<div
		class="shrinked grid w-full gap-8 text-left md:grid-cols-1 md:items-center md:text-left lg:grid-cols-1"
	>
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
	</div>
</section>

<style>
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
