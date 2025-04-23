<script>
  import { user, logout } from "$lib/firebase";
  import { onDestroy } from "svelte";

  let isMenuOpen = false;
  let isProfileOpen = false;
  let isServicesOpen = false;
  let currentUser = null;

  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  const toggleProfile = () => (isProfileOpen = !isProfileOpen);
  const toggleServices = () => (isServicesOpen = !isServicesOpen);

  const unsubscribe = user.subscribe((u) => {
    currentUser = u;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<header class="bg-slate-100 shadow-md sticky top-0 z-50">
  <nav class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
    
    <!-- Left: Logo -->
    <a href="/" class="text-2xl font-bold text-blue-600">MoveEase</a>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6 text-gray-700">
      <li><a href="/" class="hover:text-blue-500">Home</a></li>
      <li><a href="/find-movers" class="hover:text-blue-500">Find Movers</a></li>

      <!-- Services Dropdown -->
      <li class="relative">
        <button on:click={toggleServices} class="hover:text-blue-500 flex items-center">
          Services ▼
        </button>
        {#if isServicesOpen}
          <ul class="absolute bg-white shadow-md py-2 w-48 mt-2 rounded-md z-50">
            <li><a href="/services/packing" class="block px-4 py-2 hover:bg-gray-100">Packing</a></li>
            <li><a href="/services/storage" class="block px-4 py-2 hover:bg-gray-100">Storage</a></li>
            <li><a href="/services/vehicle-transport" class="block px-4 py-2 hover:bg-gray-100">Vehicle Transport</a></li>
          </ul>
        {/if}
      </li>

      <li><a href="/reviews" class="hover:text-blue-500">Customer Reviews</a></li>
      <li><a href="/help" class="hover:text-blue-500">Help & Support</a></li>
      <li><a href="tel:+91 9661141005" class="hover:text-blue-500">Call Us</a></li>
    </ul>

    <!-- Right: Profile/Login (Desktop) -->
    <div class="hidden md:flex items-center space-x-4">
      {#if currentUser}
        <div class="relative">
          <button on:click={toggleProfile} class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span class="text-gray-700">👤</span>
          </button>
          {#if isProfileOpen}
            <ul class="absolute right-0 bg-white shadow-md py-2 w-48 mt-2 rounded-md z-50">
              <li><a href="/profile" class="block px-4 py-2 hover:bg-gray-100">Bookings</a></li>
              <li><a href="/saved-movers" class="block px-4 py-2 hover:bg-gray-100">Saved Movers</a></li>
              <li><a href="/settings" class="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
              <li><button on:click={logout} class="block px-4 py-2 hover:bg-gray-100 w-full text-left">Logout</button></li>
            </ul>
          {/if}
        </div>
      {:else}
        <a href="/login" class="px-4 py-2 border rounded-lg text-blue-600 border-blue-500 hover:bg-blue-100">Login</a>
        <a href="/signup" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</a>
      {/if}
    </div>

    <!-- Mobile Menu Button -->
    <button on:click={toggleMenu} class="md:hidden p-2 bg-gray-100 rounded-md">
      ☰
    </button>
  </nav>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden px-4 pb-4 bg-slate-100 space-y-3">
      <a href="/" class="block hover:text-blue-500">Home</a>
      <a href="/find-movers" class="block hover:text-blue-500">Find Movers</a>

      <!-- Services -->
      <div class="relative">
        <button on:click={toggleServices} class="flex items-center w-full hover:text-blue-500">
          Services ▼
        </button>
        {#if isServicesOpen}
          <ul class="bg-white shadow-md py-2 w-full mt-2 rounded-md z-40">
            <li><a href="/services/packing" class="block px-4 py-2 hover:bg-gray-100">Packing</a></li>
            <li><a href="/services/storage" class="block px-4 py-2 hover:bg-gray-100">Storage</a></li>
            <li><a href="/services/vehicle-transport" class="block px-4 py-2 hover:bg-gray-100">Vehicle Transport</a></li>
          </ul>
        {/if}
      </div>

      <a href="/reviews" class="block hover:text-blue-500">Customer Reviews</a>
      <a href="/help" class="block hover:text-blue-500">Help & Support</a>
      <a href="tel:+91 9661141005" class="block hover:text-blue-500">Call Us</a>

      <!-- Profile/Login (Mobile) -->
      {#if currentUser}
        <div class="mt-4 border-t pt-4 space-y-2">
          <a href="/profile" class="block hover:text-blue-500">Bookings</a>
          <a href="/saved-movers" class="block hover:text-blue-500">Saved Movers</a>
          <a href="/settings" class="block hover:text-blue-500">Settings</a>
          <button on:click={logout} class="block text-left w-full hover:text-red-600">Logout</button>
        </div>
      {:else}
        <div class="mt-4 space-y-2">
          <a href="/login" class="block px-4 py-2 border rounded-lg text-blue-600 border-blue-500 hover:bg-blue-100">Login</a>
          <a href="/signup" class="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</a>
        </div>
      {/if}
    </div>
  {/if}
</header>
