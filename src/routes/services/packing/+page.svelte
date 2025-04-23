<script>
    import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <section class="bg-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Professional Packing Services</h1>
      <p class="text-lg text-gray-600 mb-10">
        Ensure the safety of your belongings with our expert packing services. We handle everything with care and precision.
      </p>
    </div>
  
    <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">📦</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Secure Wrapping</h2>
        <p class="text-gray-600">
          We use high-quality packing materials to wrap and protect fragile and valuable items.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🔒</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Tamper-Proof Sealing</h2>
        <p class="text-gray-600">
          Every box is sealed and labeled clearly to ensure security and easy identification.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🚛</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Ready for Transit</h2>
        <p class="text-gray-600">
          Our packing ensures that your items are ready for long-distance or local relocation.
        </p>
      </div>
    </div>
  
    <div class="mt-16 text-center">
      <a href="/contact" class="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Get a Free Packing Quote
      </a>
    </div>
  </section>
  