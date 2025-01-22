<script>
	import Header from '$lib/components/Header.svelte';
	import Faq from './sections/FAQ.svelte';
	import Plans from './sections/Plans.svelte';
</script>

<Header page_name="Subscriptions" page_rout="subscriptions">
	<svelte:fragment slot="title">Join Enigmia.ai Today!</svelte:fragment>
	Unlock exclusive features and insights.
</Header>

<Plans />

<Faq />
