// src/lib/actions/placesAutocomplete.js
export function placesAutocomplete(node, callback = () => {}) {
    let autocomplete;
  
    function initAutocomplete() {
      if (window.google && window.google.maps && window.google.maps.places) {
        autocomplete = new google.maps.places.Autocomplete(node, {
          types: ['(cities)'],
        });
  
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          callback(place);
        });
      }
    }
  
    const interval = setInterval(() => {
      if (window.google && window.google.maps && window.google.maps.places) {
        clearInterval(interval);
        initAutocomplete();
      }
    }, 300);
  
    return {
      destroy() {
        clearInterval(interval);
      }
    };
  }
  