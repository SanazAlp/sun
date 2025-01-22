<script>
</script>

<section>
	<div class="shrinked grid w-full gap-2 text-center md:grid-cols-2 md:items-center md:text-left">
		<div class="mt-5">
			<h1 class="large">
				<span class="text-style-00"> Enigmia.ai </span>
				<span class="text-style-02"> Think, Solve, Succeed! </span>
			</h1>
			<p class="mt-5">
				Challenge yourself with interesting riddles and improve your problem-solving skills!
			</p>
			<div class="mt-5 gap-2">
				<div class="mt-8 items-center gap-2">
					<p>
						<a style="text-decoration: none;" target="_blank" href="https://app.enigmia.ai/"
							>Play Now!</a
						>
					</p>
					<br />

					<button
						on:click={() =>
							window.open('https://play.google.com/store/apps/details?id=com.enigmia.ai', '_blank')}
					>
						<img src="GooglePlay.png" width="200px" alt="" />
					</button>

					<button class="pointer-events-none opacity-50" disabled>
						<img src="AppStore.png" width="200px" alt="" />
					</button>
				</div>
			</div>
		</div>
		<div class="mt-5 flex justify-center md:justify-end">
			<img
				src="screenshot_01.png"
				alt="App Screenshot"
				class="image transform hover:scale-105"
				style="transition-duration: 1.5s;"
			/>
		</div>
	</div>
</section>

<style>
	.text-style-00 {
		color: var(--gold-400) !important;
	}
	.text-style-02 {
		color: var(--orange-500) !important;
	}
	.image {
		width: 300px;
		height: auto;
		transition:
			transform 0.5s,
			filter 0.5s;
	}
</style>
