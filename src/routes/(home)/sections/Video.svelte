<script>
  let videoId = "dQw4w9WgXcQ";
  let showVideo = false;

  const playVideo = () => {
    showVideo = true;
  };
</script>

<section class="dark">
  <div class="shrinked grid w-full gap-6 text-left md:grid-cols-2 lg:grid-cols-2">
    <!-- متن -->
    <div class="text-center md:text-left w-full">
      <h2>More Than A Game!</h2>
      <h3 class="mb-10">Why Choose Enigmia.ai?</h3>
      <p class="mt-10 content">
        Solve intricate riddles and challenge your mind with Enigma! Dive into a world of puzzles, collect gems, and seek guidance from Professor Owl. Compete with other players, climb the leaderboard, and become a master of riddles. Your adventure awaits!
      </p>
    </div>

    <!-- ویدیو یا کاور -->
    <div class="flex-shrink-0 w-full h-[315px] relative">
      {#if !showVideo}
        <button 
          class="absolute inset-0 w-full h-full cursor-pointer group"
          on:click={playVideo}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Enigmia.ai"
            class="w-full h-full rounded-lg shadow-lg group-hover:opacity-90 object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="youtube.svg"
              alt=""
              class="w-16 h-16 drop-shadow-md group-hover:scale-10 transform transition play"
            />
          </div>
        </button>
      {/if}
      {#if showVideo}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="YouTube Video Player"
          class="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      {/if}
    </div>
  </div>
</section>
<style>
  .play
  {
    filter: invert(79%) sepia(35%) saturate(342%) hue-rotate(341deg) brightness(94%) contrast(89%) !important;
  }
  .content {
		color: var(--orange-400);
	}
</style>
