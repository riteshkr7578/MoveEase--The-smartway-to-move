<script>
    import { auth } from "$lib/firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
  
    let email = "";
    let password = "";
    let errorMessage = "";
  
    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "/"; // Redirect after login
      } catch (error) {
        errorMessage = error.message;
      }
    };
  </script>
  
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    {#if errorMessage}
      <p class="text-red-500">{errorMessage}</p>
    {/if}
    <input type="email" bind:value={email} placeholder="Email" class="w-full border p-2 mb-3 rounded">
    <input type="password" bind:value={password} placeholder="Password" class="w-full border p-2 mb-3 rounded">
    <button on:click={login} class="w-full bg-blue-600 text-white py-2 rounded">Login</button>
  </div>
  