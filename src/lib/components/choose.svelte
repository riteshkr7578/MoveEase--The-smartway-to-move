<script>
    const reasons = [
      {
        title: "Verified & Trusted Movers",
        desc: "No scams, only GST-verified companies",
        icon: "🛡️"
      },
      {
        title: "Instant Pricing Transparency",
        desc: "No hidden charges, full cost breakdown",
        icon: "📊"
      },
      {
        title: "Secure Payments",
        desc: "Pay via UPI, PhonePe, Paytm, COD",
        icon: "💳"
      },
      {
        title: "Shared Truck Options",
        desc: "Budget-friendly – ideal for students & solo movers",
        icon: "🚚"
      },
      {
        title: "Packing & Storage Assistance",
        desc: "Handled with care by professionals",
        icon: "📦"
      }
    ];
  </script>
  
  <section class="bg-slate-100 py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
        Why Choose <span class="text-emerald-600">MoveEase</span>?
      </h2>
      <p class="text-lg text-slate-600 mb-10">
        India’s Most Reliable & Affordable Moving Solution
      </p>
  
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each reasons as reason}
          <div class="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
            <div class="text-4xl text-emerald-600 mb-4">{reason.icon}</div>
            <h3 class="text-xl font-semibold text-slate-800 mb-2">{reason.title}</h3>
            <p class="text-slate-600 text-sm">{reason.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  