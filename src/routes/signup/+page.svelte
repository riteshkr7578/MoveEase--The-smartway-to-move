<script>
  import { auth } from "$lib/firebase";
  import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { goto } from "$app/navigation";
  import Navbar from "$lib/components/Navbar.svelte";

  let email = "";
  let password = "";
  let confirmPassword = "";
  let errorMessage = "";

  const signup = async () => {
    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match!";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      goto("/");
    } catch (error) {
      errorMessage = error.message;
    }
  };

  const signupWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      goto("/");
    } catch (error) {
      errorMessage = error.message;
    }
  };
</script>

<Navbar />

<section class="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 px-4">
  <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>

    {#if errorMessage}
      <div class="bg-red-100 text-red-700 text-center px-4 py-2 rounded mb-4 text-sm">
        {errorMessage}
      </div>
    {/if}

    <form class="space-y-4" on:submit|preventDefault={signup}>
      <input
        type="email"
        bind:value={email}
        placeholder="Email"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        required
      />
      <input
        type="password"
        bind:value={password}
        placeholder="Password"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        required
      />
      <input
        type="password"
        bind:value={confirmPassword}
        placeholder="Confirm Password"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        required
      />

      <button
        type="submit"
        class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition"
      >
        Sign Up
      </button>
    </form>

    <div class="flex items-center my-6">
      <div class="flex-grow border-t border-gray-300"></div>
      <span class="px-4 text-gray-400 text-sm">OR</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>

    <button
      on:click={signupWithGoogle}
      class="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" class="w-5 h-5" />
      <span>Sign Up with Google</span>
    </button>

    <p class="mt-6 text-center text-sm text-gray-600">
      Already have an account? 
      <a href="/login" class="text-blue-600 font-medium hover:underline">Login</a>
    </p>
  </div>
</section>
