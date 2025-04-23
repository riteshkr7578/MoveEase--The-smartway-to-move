<script>
    import Navbar from '$lib/components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <!-- Hero Section -->
  <section class="bg-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Vehicle Transport Services</h1>
      <p class="text-lg text-gray-600 mb-10">
        Move your car or bike across cities safely with our trusted vehicle relocation experts.
      </p>
    </div>
  
    <!-- Service Features -->
    <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🚗</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Car & Bike Shifting</h2>
        <p class="text-gray-600">
          We offer dedicated and shared transport options for cars, bikes, and two-wheelers, ensuring safe and timely delivery.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">📍</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Real-Time Tracking</h2>
        <p class="text-gray-600">
          Get full visibility with live tracking of your vehicle throughout its journey.
        </p>
      </div>
  
      <div class="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <div class="text-5xl mb-4">🛡️</div>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Transit Insurance</h2>
        <p class="text-gray-600">
          Stay covered with optional insurance plans for added peace of mind during transportation.
        </p>
      </div>
    </div>
  
    <!-- CTA -->
    <div class="mt-16 text-center">
      <a href="/contact" class="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Book Vehicle Transport
      </a>
    </div>
  </section>
  