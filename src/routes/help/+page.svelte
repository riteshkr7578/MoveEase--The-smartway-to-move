<script>
    import Navbar from '$lib/components/Navbar.svelte';
  
    let faqs = [
      {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button and fill in your details. You're all set!"
      },
      {
        question: "Can I reschedule my move?",
        answer: "Yes, you can reschedule anytime from your dashboard."
      },
      {
        question: "How do I contact support?",
        answer: "Email us at support@moveease.com or use our live chat."
      }
    ];
  
    let openIndex = null;
    const toggle = (index) => openIndex = openIndex === index ? null : index;
  </script>
  
  <!-- Use your custom navbar -->
  <Navbar />
  
  <!-- Help Page -->
  <section class="bg-gradient-to-br from-blue-100 to-white min-h-screen px-4 py-16">
    <!-- Hero -->
    <div class="max-w-5xl mx-auto text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Help & Support</h1>
      <p class="text-gray-600 text-lg">Everything you need to get the most out of MoveEase.</p>
    </div>
  
    <!-- FAQ Section -->
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button
              class="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
              on:click={() => toggle(index)}
            >
              {faq.question}
              <span class="text-xl font-bold">{openIndex === index ? '−' : '+'}</span>
            </button>
            {#if openIndex === index}
              <div class="p-4 text-gray-600 border-t bg-gray-50">{faq.answer}</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Contact CTA -->
    <div class="mt-20 text-center">
      <h3 class="text-2xl font-semibold mb-2">Still need help?</h3>
      <p class="text-gray-600 mb-4">Reach out to us directly, we’re here 24/7.</p>
      <a
        href="mailto:support@moveease.com"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        Contact Support
      </a>
    </div>
  
    <!-- Help Cards at the Bottom -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-20 max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div class="text-blue-500 text-3xl mb-3">📖</div>
        <h3 class="text-xl font-semibold mb-2">User Guides</h3>
        <p class="text-gray-500">Step-by-step tutorials to walk you through every feature.</p>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div class="text-yellow-500 text-3xl mb-3">💡</div>
        <h3 class="text-xl font-semibold mb-2">Tips & Tricks</h3>
        <p class="text-gray-500">Power-user tips to make your move smarter and easier.</p>
      </div>
      <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
        <div class="text-green-500 text-3xl mb-3">🛠️</div>
        <h3 class="text-xl font-semibold mb-2">Support Center</h3>
        <p class="text-gray-500">Talk to our support team or browse troubleshooting topics.</p>
      </div>
    </div>
  </section>
  