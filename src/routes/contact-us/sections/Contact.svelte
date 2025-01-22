<script>
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright, Button } from 'flowbite-svelte';
	import { Spinner } from 'flowbite-svelte';

	let is_loading = false;
	let was_successful = false;

	async function handleSubmit(event) {
		is_loading = true;

		// Prevent the default form submission behavior
		event.preventDefault();

		// Extract data from the form
		const form = new FormData(event.target); // event.target points to the form
		const formData = Object.fromEntries(form.entries());

		// Make an API call to your server-side endpoint
		const response = await fetch('/api/submit_contact_form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		// Handle the response
		if (response.ok) {
			was_successful = true;
			is_loading = false;
		} else {
			console.error('Failed to send message');
			is_loading = false;
		}
	}
</script>

<section class="ligth">
	<div class="shrinked w-full gap-2 text-center md:items-center md:text-left">
		<h2>Feel free to send message</h2>
		<h3>We are waiting for you</h3>
		<div class="mt-5 md:grid md:grid-cols-4 md:gap-x-3">
			<div class="text-left md:col-span-2">
				<form on:submit={handleSubmit}>
					<div>
						<label for="name">Your name</label>
						<input class="w-full" type="text" id="name" name="name" />
					</div>
					<div>
						<label for="email">Your email address</label>
						<input class="w-full" type="email" id="email" name="email" />
					</div>
					<div>
						<label for="message">Your Message</label>
						<textarea class="w-full" id="message" name="message" />
					</div>
					<div class="mt-4 flex text-center md:text-left">
						{#if !was_successful}
							<button
								class="button rounded-lg bg-PrimaryButton px-4 py-3 text-gray-50"
								type="submit"
								disabled={is_loading}
							>
								{#if is_loading}
									<Spinner size="5" color="gray" class="mr-2" />
									Sending...
								{:else}
									Send Message
								{/if}
							</button>
						{:else}
							<div class="button rounded-lg bg-PrimaryButton px-4 py-3 text-center text-gray-50">
								Well received!
							</div>
						{/if}
					</div>
				</form>
			</div>
			<div class="mt-5 md:col-start-4">
				<p style="opacity: 50%;" class="mb-5">
					Or contact us in the convenient<br /> way for you
				</p>
				<a href="mailto:info@enigmia.ai">info@enigmia.ai</a>
			</div>
		</div>
	</div>
</section>

<style>
	.dark {
		background-color: var(--red-brown-900);
	}
</style>
