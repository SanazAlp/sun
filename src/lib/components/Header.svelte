<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	export let page_name = '';
	export let page_rout = '';
</script>

<section class="custom-section">
	<div class="shrinked text-center">
		<h1><slot name="title"></slot></h1>
		<slot></slot>
	</div>
	<div class="address-bar flex justify-center py-1">
		<Breadcrumb>
			<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/{page_rout}">{page_name}</BreadcrumbItem>
		</Breadcrumb>
	</div>
</section>

<style>
	.custom-section {
		border-color: var(--orange-800);
		border-width: 1px 0px 1px 0px;
		background: radial-gradient(circle at bottom, rgba(195, 120, 52, 0.2), var(--red-brown-800));
	}
	.address-bar {
		background-color: rgba(41, 8, 4, 0.4);
	}
</style>
