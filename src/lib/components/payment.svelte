<script>
    const guarantees = [
      {
        icon: "💸",
        title: "Multiple Payment Options",
        desc: "Pay using UPI, Paytm, PhonePe, Debit/Credit Cards, or Cash on Delivery."
      },
      {
        icon: "🛡️",
        title: "Escrow-Based Payments",
        desc: "Movers get paid only after successful service — secure for both sides."
      },
      {
        icon: "🔁",
        title: "100% Refund Policy",
        desc: "Plans changed? Get a full refund with no hassle."
      },
      {
        icon: "📦",
        title: "Free Damage Protection Insurance",
        desc: "Premium bookings include complimentary damage protection."
      }
    ];
  </script>
  
  <section class="bg-slate-100 py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
        Payment & <span class="text-emerald-600">Safety Guarantees</span>
      </h2>
      <p class="text-lg text-slate-600 mb-12">
        Transparent, secure and risk-free moving experience
      </p>
  
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {#each guarantees as item}
          <div class="bg-white p-8 rounded-2xl shadow-md border border-slate-200 text-left">
            <div class="text-4xl text-emerald-600 mb-4">{item.icon}</div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  