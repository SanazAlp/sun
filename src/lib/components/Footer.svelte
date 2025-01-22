<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
	import { Spinner } from 'flowbite-svelte';
</script>

<section class="dark-footer">
	<div class="shrinked cpad">
		<Footer class="bottom-0 flex flex-col items-center justify-center px-8 text-center md:px-0">
			<div class="social-icons mt-4 flex space-x-4 md:mt-0">
				<a
					href="https://discord.com/channels/1195329657441091634/1247444966209224764"
					target="_blank"
					aria-label="Discord"
				>
					<img src="discord.svg" alt="Discord Icon" class="social-icon" />
				</a>
				<a href="https://x.com" target="_blank" aria-label="X (formerly Twitter)">
					<img src="x.svg" alt="X Icon" class="social-icon" />
				</a>
				<a href="https://www.instagram.com/enigmia.ai" target="_blank" aria-label="Instagram">
					<img src="instagram.svg" alt="Instagram Icon" class="social-icon" />
				</a>
				<a href="https://www.youtube.com" target="_blank" aria-label="YouTube">
					<img src="youtube.svg" alt="YouTube Icon" class="social-icon" />
				</a>
			</div>
			<FooterCopyright href="/" by="Enigmia.ai™" year="2024" />
		</Footer>
	</div>
</section>

<section>
	<div class="floating-button">
		<a href="https://discord.com/channels/1195329657441091634/1247444966209224764" target="_blank">
			<img src="discord.svg" alt="Discord Icon" />
			<div class="text-container">
				<p class="bold">Confused?</p>
				<p>MEET THE</p>
				<p>COMMUNITY</p>
			</div>
		</a>
	</div>
</section>

<style>
	.dark-footer {
		background-color: var(--red-brown-900);
	}
	.cpad {
		padding-top: 30px !important;
		padding-bottom: 1rem !important;
		opacity: 70%;
	}

	.social-icons {
		display: flex;
		gap: 10px;
	}

	.social-icon {
		width: 20px;
		height: 20px;
		transition: transform 0.3s ease;
		margin-bottom: 20px;
		filter: invert(83%) sepia(29%) saturate(567%) hue-rotate(337deg) brightness(96%) contrast(87%);
	}

	.social-icon:hover {
		transform: scale(1.2);
	}

	.floating-button {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: #5865f2;
		color: white;
		padding: 10px 15px;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		font-size: 0.9rem;
		cursor: pointer;
		z-index: 1000;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.floating-button:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
	}

	.floating-button img {
		width: 25px;
		height: 25px;
		margin-right: 10px;
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}

	.floating-button a {
		text-decoration: none;
		color: white;
		display: flex;
		align-items: center;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.text-container p {
		margin: 0;
		color: white !important;
		font-weight: bold;
	}
</style>
