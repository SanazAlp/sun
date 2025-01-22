<script>
	import Header from '$lib/components/Header.svelte';
	import WhoWeAre from './sections/WhoWeAre.svelte';
	import OurStory from './sections/OurStory.svelte';
	import WhatWeOffer from './sections/WhatWeOffer.svelte';
	import MissionVision from './sections/MissionVision.svelte';
</script>

<Header page_name="About us" page_rout="about-us">
	<svelte:fragment slot="title">About us</svelte:fragment>
</Header>

<WhoWeAre />
<OurStory />
<WhatWeOffer />
<MissionVision />
