<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let showContent = false;

  onMount(() => {
    showContent = true;
  });
</script>

<section class="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-start text-white"
  style="background-image: url('/Hero2.jpg');">
  <div class="absolute inset-0 bg-opacity-50"></div>

  {#if showContent}
    <div class="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-2xl ml-auto mr-auto sm:ml-16 lg:ml-24">
      <h1 
        transition:fly={{ y: 50, duration: 500 }}
        class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-indigo-600">
        Move Smart, Move Easy – 
        <span class="text-indigo-600">Find & Book Trusted Movers Instantly!</span>
      </h1>

      <p 
        transition:fly={{ y: 50, duration: 500, delay: 100 }}
        class="text-lg sm:text-xl mb-6">
        Compare Verified Packers & Movers Across India<br />
        Instant Quotes & Transparent Pricing<br />
        No Hidden Fees, No Last-Minute Surprises!
      </p>

      <div 
        transition:fly={{ y: 50, duration: 500, delay: 200 }}
        class="flex flex-col sm:flex-row gap-4">
        <a href="/find-movers"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
          Find Movers Now
        </a>
        <a href="/support"
          class="bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
          Talk to a Moving Expert
        </a>
      </div>
    </div>
  {/if}
</section>