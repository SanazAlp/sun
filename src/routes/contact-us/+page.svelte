<script>
	import Header from '$lib/components/Header.svelte';
	import Contact from './sections/Contact.svelte';
</script>

<Header page_name="Contact us" page_rout="contact-us">
	<svelte:fragment slot="title">Contact us</svelte:fragment>
</Header>
<Contact />
