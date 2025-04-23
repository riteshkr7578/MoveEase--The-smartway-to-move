<script>
    const steps = [
      {
        number: 1,
        title: "Enter Your Move Details",
        desc: "Share your origin, destination & moving type to get an instant estimate.",
        icon: "📝"
      },
      {
        number: 2,
        title: "Compare Packers & Movers",
        desc: "Get live estimates from verified, GST-registered movers across India.",
        icon: "📊"
      },
      {
        number: 3,
        title: "Customize Your Services",
        desc: "Add packing, storage, insurance or shared truck options as needed.",
        icon: "⚙️"
      },
      {
        number: 4,
        title: "Book & Track Your Move",
        desc: "Finalize the best quote and track your move in real-time!",
        icon: "📦"
      }
    ];
  </script>
  
  <section class="bg-slate-100 py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
        How <span class="text-emerald-600">MoveEase</span> Works
      </h2>
      <p class="text-lg text-slate-600 mb-12">
        A step-by-step guide to your seamless moving experience
      </p>
  
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {#each steps as step}
          <div class="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition text-left">
            <div class="text-5xl mb-4 text-emerald-600">{step.icon}</div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        {/each}
      </div>
  
      <!-- Optional: Video Placeholder -->
      <div class="mt-16">
        <div class="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md">
          <!-- svelte-ignore a11y_media_has_caption -->
          <video 
            controls 
            class="w-full h-full rounded-lg"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
  