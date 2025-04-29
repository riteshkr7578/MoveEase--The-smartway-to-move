<script>
  import { auth } from "$lib/firebase";
  import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Navbar from "$lib/components/Navbar.svelte";

  let email = "";
  let password = "";
  let errorMessage = "";
  let isLoading = false;

  const login = async () => {
      isLoading = true;
      errorMessage = "";
      try {
          await signInWithEmailAndPassword(auth, email, password);
          window.location.href = "/";
      } catch (error) {
          errorMessage = error.message;
          isLoading = false;
      }
  };

  const loginWithGoogle = async () => {
      try {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
          window.location.href = "/";
      } catch (error) {
          errorMessage = error.message;
      }
  };

  const loginWithFacebook = async () => {
      try {
          const provider = new FacebookAuthProvider();
          await signInWithPopup(auth, provider);
          window.location.href = "/";
      } catch (error) {
          errorMessage = error.message;
      }
  };
</script>
<Navbar />
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
  <div 
      transition:fly={{ y: 50, duration: 500, easing: quintOut }}
      class="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
  >
      <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
          <h1 class="text-3xl font-bold text-white">Welcome Back</h1>
          <p class="text-blue-100 mt-2">Sign in to your account</p>
      </div>

      <div class="p-8">
          {#if errorMessage}
              <div 
                  transition:fade
                  class="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span>{errorMessage}</span>
              </div>
          {/if}

          <form on:submit|preventDefault={login} class="space-y-6">
              <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input
                      id="email"
                      type="email"
                      bind:value={email}
                      placeholder="your@email.com"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
              </div>

              <div class="space-y-2">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input
                      id="password"
                      type="password"
                      bind:value={password}
                      placeholder="••••••••"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
              </div>

              <div class="flex items-center justify-between">
                  <div class="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                  </div>
                  <a href="/Forget" class="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
              </div>

              <button
                  type="submit"
                  class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-[1.02]"
                  disabled={isLoading}
              >
                  {#if isLoading}
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                  {:else}
                      Sign in
                  {/if}
              </button>
          </form>

          <div class="mt-6">
              <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-3">
                  <button
                      on:click={loginWithGoogle}
                      type="button"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200"
                  >
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z" fill="#4285F4"/>
                          <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/>
                          <path d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z" fill="#FBBC04"/>
                          <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
                      </svg>
                      <span class="ml-2">Google</span>
                  </button>
                  <button
                      on:click={loginWithFacebook}
                      type="button"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200"
                  >
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"/>
                      </svg>
                      <span class="ml-2">Facebook</span>
                  </button>
              </div>
          </div>

          <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
              </p>
          </div>
      </div>
  </div>
</div>