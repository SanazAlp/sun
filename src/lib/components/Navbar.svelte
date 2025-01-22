<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<section>
	<div class="shrinked cpad">
		<Navbar>
			<NavBrand href="/">
				<img src="icon.svg" class="me-3 h-6 sm:h-9" alt="Enigmia.ai" />
				<img src="logo.svg" class="me-3 h-6 sm:h-9" alt="Enigmia.ai" />
			</NavBrand>
			<NavHamburger />
			<NavUl>
				<NavLi href="/">Home</NavLi>
				<!-- <NavLi href="/about-us">About us</NavLi> -->
				<NavLi href="/contact-us">Contact</NavLi>
				<NavLi href="/subscriptions">Subscriptions</NavLi>
				<NavLi href="/news">News</NavLi>
				<NavLi href="/privacy-policy">Privacy Policy</NavLi>
			</NavUl>
		</Navbar>
	</div>
</section>

<style>
	.cpad {
		padding-top: 0px !important;
		padding-bottom: 0px !important;
	}
</style>
