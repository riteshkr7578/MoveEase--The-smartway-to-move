<script context="module" lang="ts">
    import { sendPasswordResetEmail } from 'firebase/auth';
    import { auth } from '$lib/firebase';  // Import the Firebase configuration and auth
    import { writable } from 'svelte/store';
  
    let email = '';
    let errorMessage = writable('');
    let successMessage = writable('');
  
    function handleForgotPassword() {
      if (!email) {
        errorMessage.set('Please enter your email address.');
        return;
      }
      errorMessage.set('');
      successMessage.set('');
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          successMessage.set('Password reset email sent! Please check your inbox.');
          setTimeout(() => {
            window.location.href = '/login'; // Redirect to the login page after 3 seconds
          }, 3000);
        })
        .catch((error) => {
          errorMessage.set(error.message);
        });
    }
  </script>
  
  <style>
    .forgot-password-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
  
    button {
      width: 100%;
      padding: 12px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
    }
  
    .error {
      color: red;
      font-size: 14px;
    }
  
    .success {
      color: green;
      font-size: 14px;
    }
  </style>
  
  <div class="forgot-password-container">
    <h2>Forgot Password</h2>
  
    <!-- Error and Success Messages -->
    {#if $errorMessage}
      <p class="error">{$errorMessage}</p>
    {/if}
  
    {#if $successMessage}
      <p class="success">{$successMessage}</p>
    {/if}
  
    <form on:submit|preventDefault={handleForgotPassword}>
      <div>
        <label for="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Your email"
          required
        />
      </div>
  
      <button type="submit">Send Reset Link</button>
    </form>
  </div>
  