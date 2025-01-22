<script>
	import Header from '$lib/components/Header.svelte';
	import Filter from './section/Filter.svelte';
</script>

<Header page_name="Contact us" page_rout="contact-us">
	<svelte:fragment slot="title">Latest News</svelte:fragment>
</Header>
<main>
	<Filter />
</main>
