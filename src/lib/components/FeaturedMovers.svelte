<script>
    const movers = [
      {
        id: 1,
        name: "QuickMove Packers",
        rating: "4.8/5",
        coverage: "Mumbai → Bangalore",
        specialty: "Fragile Items, Vehicle Transport",
        logo: "/quickmove.jpg"
      },
      {
        id: 2,
        name: "EasyGo Relocations",
        rating: "4.7/5",
        coverage: "Delhi → Hyderabad",
        specialty: "Packing & Storage",
        logo: "/easygo.png"
      },
      {
        id: 3,
        name: "MoveWell Logistics",
        rating: "4.9/5",
        coverage: "Chennai → Pune",
        specialty: "Office Shifting, Long-Distance",
        logo: "/movewell.jpg"
      }
      // Add more movers here
    ];
  </script>
  
  <section class="py-16 bg-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-10">
        Featured <span class="text-emerald-600">Packers & Movers</span>
      </h2>
  
      <!-- Scrollable Carousel -->
      <div class="flex overflow-x-auto space-x-6 pb-4 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 scrollbar-hide">
        {#each movers as mover}
          <div class="min-w-[300px] flex-shrink-0 sm:min-w-0 bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg border border-slate-100 transition">
            <img src={mover.logo} alt={mover.name} class="h-12 mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-slate-800">{mover.name}</h3>
            <p class="text-emerald-600 text-sm mb-2">⭐ {mover.rating}</p>
            <p class="text-sm text-slate-600"><strong>Route:</strong> {mover.coverage}</p>
            <p class="text-sm text-slate-600 mb-4"><strong>Services:</strong> {mover.specialty}</p>
  
            <div class="flex gap-3">
              <a href={`/movers/${mover.id}`} class="text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
                View Profile
              </a>
              <a href="/get-quote" class="text-sm border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-md">
                Get Quote
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  