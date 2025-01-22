<script>
	import { AccordionItem } from 'flowbite-svelte';
	let records = [
		{
			title: 'How do I start solving riddles?',
			content:
				'Simply download the app, choose your preferred category, and start solving riddles. You can enter your answers directly in the app and receive immediate feedback.'
		},
		{
			title: 'What if I get stuck on a riddle?',
			content:
				'If you find yourself stuck on a riddle, you can choose to take a break by clicking on ‘give up’ and try solving it again later. Make sure not to keep the riddle among open ones.'
		},
		{
			title: 'Can I complete with other users?',
			content:
				'Enigmia currently focuses on improving individual skills and does not offer competition features yet.'
		},
		{
			title: 'How do I level up and earn gems?',
			content:
				'We recommend you to dive into the thrill of solving more riddles, embrace the journey of self-improvement, and immerse yourself in the exciting math challenges that Enigmia offers. The more you play, the more you grow and earn!'
		},
		{
			title: 'Are there new riddles added regularly?',
			content:
				'Absolutely! Enigmia is passionate about keeping our users excited and engaged, so we regularly add fresh, new riddles for you to enjoy. Stay tuned for continuous challenges!'
		}
	];
</script>

<section class="light">
	<div class="shrinked w-full gap-2 text-center md:items-center md:text-left">
		<h2>Frequently Asked Questions</h2>
		<h3>Don’t take our word for it. Trust our Users</h3>

		<div class="mt-8 grid gap-y-4">
			{#each records as record}
				<div class="card w-full">
					<AccordionItem
						defaultClass="flex items-center justify-between w-full"
						borderClass=""
						borderOpenClass=""
						borderBottomClass=""
						borderSharedClass=""
					>
						<span slot="header" class="title">{record.title}</span>
						<p class="mb-2 text-left">{record.content}</p>
					</AccordionItem>
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
	}
	.title {
		font-weight: bold;
		font-size: 1rem;
	}
</style>
