<script>
	import { AccordionItem } from 'flowbite-svelte';
	let records = [
		{
			title: 'Can I change my subscription later?',
			content:
				'Absolutely! You can change your subscription at any time before the new subscription period begins.'
		},
		{
			title: 'How should I purchase these plans?',
			content: 'Simply select the plan you want and proceed with the payment steps provided.'
		}
	];
</script>

<section>
	<div class="shrinked w-full gap-2 text-center md:items-center md:text-left">
		<h2>Frequently Asked Questions</h2>
		<h3>Any question about Plans?</h3>

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
