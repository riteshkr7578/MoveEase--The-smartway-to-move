<script>
    import Navbar from '$lib/components/Navbar.svelte';
  
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
      },
      {
        name: "Ravi",
        location: "Chennai",
        text: "Great experience! Movers were on time and very professional.",
        avatar: "/ravi.avif"
      },
      {
        name: "Neha",
        location: "Delhi",
        text: "Their storage option saved me when I had to delay my move. Super helpful support!",
        avatar: "/neha.jpg"
      },
      {
        name: "Karan",
        location: "Hyderabad",
        text: "Booked a vehicle transport — smooth process and timely delivery.",
        avatar: "/karan.jpeg"
      }
    ];
  </script>
  
  <Navbar />
  
  <section class="bg-white py-20 px-4 sm:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-slate-800 mb-4">Customer Reviews</h1>
      <p class="text-lg text-slate-600 mb-12">Hear directly from people who’ve moved with MoveEase</p>
  
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {#each reviews as review}
          <div class="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 text-left min-h-[280px] hover:shadow-2xl transition">
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
  
      <div class="mt-16 text-center">
        <a href="/get-quote" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium px-8 py-3 rounded-full transition">
          Start Your Move
        </a>
      </div>
    </div>
  </section>
  