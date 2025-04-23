<script>
    import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <!-- Hero Section -->
  <section class="bg-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Safe & Flexible Storage Services</h1>
      <p class="text-lg text-gray-600 mb-10">
        Need a secure place for your belongings? We offer reliable short-term and long-term storage solutions across India.
      </p>
    </div>
  
    <!-- Features -->
    <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🏢</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Secure Warehousing</h2>
        <p class="text-gray-600">
          Your items are stored in 24/7 monitored warehouses with climate control and high security.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">📦</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Flexible Plans</h2>
        <p class="text-gray-600">
          Choose from daily, weekly, or monthly storage options that suit your timeline and budget.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🚚</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Pickup & Delivery</h2>
        <p class="text-gray-600">
          We pick up your items, store them securely, and deliver them back to your doorstep on request.
        </p>
      </div>
    </div>
  
    <!-- CTA -->
    <div class="mt-16 text-center">
      <a href="/contact" class="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Book Storage Service
      </a>
    </div>
  </section>
  