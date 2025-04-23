<script>
    const reviews = [
      {
        name: "Priya",
        location: "Bangalore",
        text: "MoveEase saved me ₹5,000! Transparent pricing & no hidden charges.",
        avatar: "/Girl1.jpeg"
      },
      {
        name: "Rahul",
        location: "Pune",
        text: "Finally, a stress-free moving platform in India!",
        avatar: "/boy1.jpg"
      },
      {
        name: "Anjali",
        location: "Mumbai",
        text: "The support team helped me book a shared truck — super affordable and reliable!",
        avatar: "/Girl2.jpeg"
      }
    ];
  </script>
  
  <section class="bg-slate-100 py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
        What Customers <span class="text-emerald-600">Say About MoveEase</span>
      </h2>
      <p class="text-lg text-slate-600 mb-12">
        Real stories from people who moved smartly and affordably
      </p>
  
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {#each reviews as review}
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-left min-h-[280px]">
            <div class="flex items-center gap-5 mb-5">
              <img src={review.avatar} alt={review.name} class="h-14 w-14 rounded-full object-cover border" />
              <div>
                <p class="text-lg font-semibold text-slate-800">{review.name}</p>
                <p class="text-sm text-slate-500">{review.location}</p>
              </div>
            </div>
            <p class="text-slate-700 text-base leading-relaxed italic">“{review.text}”</p>
          </div>
        {/each}
      </div>
  
      <div class="mt-12">
        <a href="/reviews"
          class="text-sm font-semibold text-emerald-600 hover:text-white border border-emerald-600 hover:bg-emerald-600 px-6 py-3 rounded-md transition">
          See More Reviews
        </a>
      </div>
    </div>
  </section>
  
  