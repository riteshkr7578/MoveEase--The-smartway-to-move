<script>
  import { placesAutocomplete } from '$lib/actions/placesAutocomplete';

  let from = '';
  let to = '';
  let moveType = '';
  let additionalServices = [];

  const servicesList = ['Packing', 'Storage', 'Insurance'];

  function toggleService(service) {
    if (additionalServices.includes(service)) {
      additionalServices = additionalServices.filter(s => s !== service);
    } else {
      additionalServices = [...additionalServices, service];
    }
  }

  function handleCompare() {
    console.log({ from, to, moveType, additionalServices });
  }

  function setFromPlace(place) {
    from = place.formatted_address || place.name;
  }

  function setToPlace(place) {
    to = place.formatted_address || place.name;
  }
</script>

<section class="py-16 bg-slate-100">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Compare & Book Verified Packers and Movers
    </h2>

    <div class="bg-white p-6 rounded-xl shadow-md space-y-6">
      <!-- Location Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          bind:value={from}
          placeholder="From City"
          use:placesAutocomplete={{ onPlaceSelected: setFromPlace }}
          class="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          bind:value={to}
          placeholder="To City"
          use:placesAutocomplete={{ onPlaceSelected: setToPlace }}
          class="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <!-- Move Type -->
      <div>
        <label class="block mb-2 font-semibold text-gray-700">Move Type</label>
        <select
          bind:value={moveType}
          class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled selected>Select Move Type</option>
          <option value="House">House</option>
          <option value="Office">Office</option>
          <option value="Single Item">Single Item</option>
          <option value="PG Move">PG Move</option>
        </select>
      </div>

      <!-- Additional Services -->
      <div>
        <label class="block mb-2 font-semibold text-gray-700">Additional Services</label>
        <div class="flex flex-wrap gap-4">
          {#each servicesList as service}
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                checked={additionalServices.includes(service)}
                on:change={() => toggleService(service)}
              />
              {service}
            </label>
          {/each}
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          on:click={handleCompare}
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md"
        >
          Compare Movers
        </button>
      </div>
    </div>
  </div>
</section>
