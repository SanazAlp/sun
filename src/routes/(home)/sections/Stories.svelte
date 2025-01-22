<script>
	import { Avatar, Rating } from 'flowbite-svelte';

	let records = [
		{
			name: 'Django',
			rating: 5,
			comment:
				'Enigmia.ai is my go-to app for mental workouts. The riddles are challenging and fun!'
		},
		{
			name: 'Ronald Richards',
			rating: 4,
			comment:
				"I've noticed a significant improvement in my problem-solving skills since I started using Enigmia.ai."
		},
		{
			name: 'Savannah Nguyen',
			rating: 5,
			comment:
				'The community aspect is fantastic. I love discussing riddles with fellow enthusiasts.'
		}
	];
</script>

<section class="dark">
	<div class="shrinked text-center md:items-center md:text-left">
		<h2>What Our Users Say</h2>
		<h3>Don't take our word for it. Trust our Users</h3>

		<div class="scroll-container m-10 ml-0 flex gap-x-3">
			{#each records as record}
				<div class="card scroll-item p-5">
					<div class="flex">
						<div class="flex w-full flex-col pb-4">
							<Avatar size="lg" />
							<h5 class="mt-3 text-left text-xl">{record.name}</h5>
						</div>
						<div class="flex w-full justify-end">
							<Rating divClass="flex" total={5} size={28} rating={record.rating} />
						</div>
					</div>
					<p class="text-left">{record.comment}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.card {
		background-color: var(--red-brown-500);
		border-color: var(--red-brown-400);
		border-width: 1px;
		border-radius: 12px;
		margin-bottom: 15px;
		max-width: 350px;
	}
	.scroll-container {
		display: flex;
		overflow-x: auto;
		width: 100%;
	}
	.scroll-item {
		flex: 0 0 auto;
	}
</style>
