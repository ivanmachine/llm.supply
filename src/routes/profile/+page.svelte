<script lang="ts">
  export let data;
</script>

<main>
  {#if data.auth_session}
    <h1>Logged in</h1>
    <h1>Top secret user secrets</h1>
  {:else}
    <h1>Login:</h1>
    <button>login with google</button>
  {/if}
</main>
