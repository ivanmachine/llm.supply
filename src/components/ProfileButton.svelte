<script lang="ts">
  import Button from "./Button.svelte";
  export let auth_session: string | undefined;
</script>

{#if auth_session}
  <Button text="Profile" url="/profile" />
{:else}
  <Button text="Log in" url="/login" />
{/if}
