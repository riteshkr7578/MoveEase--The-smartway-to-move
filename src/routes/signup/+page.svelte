<script>
    import { auth } from "$lib/firebase";
    import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { goto } from "$app/navigation";
  
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
        goto("/"); // Redirect to home
      } catch (error) {
        errorMessage = error.message;
      }
    };
  
    const signupWithGoogle = async () => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        goto("/"); // Redirect to home after Google login
      } catch (error) {
        errorMessage = error.message;
      }
    };
  </script>
  
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
    {#if errorMessage}
      <p class="text-red-500">{errorMessage}</p>
    {/if}
  
    <input type="email" bind:value={email} placeholder="Email" class="w-full border p-2 mb-3 rounded">
    <input type="password" bind:value={password} placeholder="Password" class="w-full border p-2 mb-3 rounded">
    <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" class="w-full border p-2 mb-3 rounded">
  
    <button on:click={signup} class="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
  
    <div class="text-center my-4 text-gray-500">OR</div>
  
    <button on:click={signupWithGoogle} class="w-full bg-blue-600 py-2 rounded flex items-center justify-center gap-2">
      <span>Sign Up with Google</span>
    </button>
  
    <p class="text-center mt-4">Already have an account? <a href="/login" class="text-blue-600">Login</a></p>
  </div>
  