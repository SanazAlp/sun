<script>
	import { onMount } from 'svelte';

	let flipped = [false, false, false, false];
	let cards = [];
	let latestCard = null;

	const flipCard = (index) => {
		flipped = flipped.map((f, i) => (i === index ? !f : f));
	};

	const apiURL = 'https://test-api.enigmia.ai/api/website/riddles/';

	const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const fetchData = async () => {
		try {
			const response = await fetch(apiURL);
			const data = await response.json();
			const sortedData = data
				.map((card) => ({
					...card,
					formattedDate: formatDate(card.model_modified_at),
					image: card.preview_image
				}))
				.sort((a, b) => new Date(b.model_modified_at) - new Date(a.model_modified_at))
				.slice(0, 4);
			latestCard = sortedData[0];
			cards = sortedData.slice(1);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	onMount(() => {
		fetchData();
	});
</script>

<section class="light">
	<div class="tit text-center md:grid-cols-4 md:items-center md:text-left">
		<h2>Latest Riddles</h2>
		<h3>Meet with enigmia.ai</h3>
	</div>

	<div
		class="shrinked grid w-full gap-4 text-center sm:grid-cols-2 md:grid-cols-4 md:items-center md:text-left"
	>
		<!-- تغییر gap به 4 و اضافه کردن padding -->
		{#if latestCard}
			<div
				tabindex="0"
				role="button"
				class="perspective relative h-80 w-full transform cursor-pointer transition-transform duration-500 hover:scale-105"
				on:click={() => flipCard(0)}
				on:keydown={(e) => e.key === 'Enter' && flipCard(0)}
				style="transition-duration: 1.5s;"
			>
				<div
					class="transform-style-3d relative h-full w-full transition-transform"
					class:rotate-y-180={flipped[0]}
					style="transition-duration: 2s;"
				>
					<!-- Front side -->
					<div
						class="backface-hidden riddle absolute h-full w-full rounded-lg shadow-xl"
						style="padding: 20px; overflow: hidden;"
					>
						<img src={latestCard.image} alt="" class="h-2/3 w-full rounded-[12px] object-cover" />
						<div class="items-left flex flex-col p-4">
							<h3 class="mb-2 text-xl">
								<span class="text-style-02">{latestCard.title}</span>
							</h3>
							<p class="date">{latestCard.formattedDate}</p>
						</div>
					</div>
					<!-- Back side -->
					<div
						class="rotate-y-180 backface-hidden back-riddle absolute h-full w-full rounded-lg text-white shadow-xl"
						style="transition-duration: 2s;"
					>
						<div class="items-left flex flex-col p-4">
							<h3 class="mb-2 text-xl font-bold">Preview</h3>
							<p class="text-left text-gray-400">
								{latestCard.preview_problem}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{#each cards as card, i}
			<div
				tabindex="0"
				role="button"
				class="perspective relative h-80 w-full transform cursor-pointer transition-transform duration-500 hover:scale-105"
				on:click={() => flipCard(i + 1)}
				on:keydown={(e) => e.key === 'Enter' && flipCard(i + 1)}
				style="transition-duration: 1.5s;"
			>
				<div
					class="transform-style-3d relative h-full w-full transition-transform"
					class:rotate-y-180={flipped[i + 1]}
					style="transition-duration: 2s;"
				>
					<!-- Front side -->
					<div
						class="backface-hidden riddle absolute h-full w-full rounded-lg shadow-xl"
						style="padding: 20px; overflow: hidden;"
					>
						<img src={card.image} alt="" class="h-2/3 w-full rounded-[12px] object-cover" />
						<div class="items-left flex flex-col p-4">
							<h3 class="mb-2 text-xl">
								<span class="text-style-02">{card.title}</span>
							</h3>
							<p class="date">{card.formattedDate}</p>
						</div>
					</div>
					<!-- Back side -->
					<div
						class="rotate-y-180 backface-hidden back-riddle absolute h-full w-full rounded-lg text-white shadow-xl"
						style="transition-duration: 2s;"
					>
						<div class="items-left flex flex-col p-4">
							<h3 class="mb-2 text-xl font-bold">Preview</h3>
							<p class="text-left text-gray-400">
								{card.preview_problem}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.rotate-y-180 {
		transform: rotateY(180deg);
	}
	.backface-hidden {
		backface-visibility: hidden;
	}
	.perspective {
		perspective: 1000px;
	}
	.transform-style-3d {
		transform-style: preserve-3d;
	}
	.riddle {
		background-color: var(--red-brown-500) !important;
		border-color: var(--red-brown-400);
		border-width: 1px;
		border-radius: 12px;
	}
	.back-riddle {
		background-color: var(--riddle-brown) !important;
		border-color: var(--red-brown-400);
		border-width: 1px;
		border-radius: 12px;
	}
	.tit {
		margin: 0 auto;
		box-sizing: border-box;
		padding-top: 3rem;
		padding-left: 2rem;
		padding-right: 2rem;
		max-width: 80rem;
		width: 100%;
	}
</style>
