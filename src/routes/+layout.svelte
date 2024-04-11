<script lang="ts">
  import BackgroundCanvas from "./../components/BackgroundCanvas.svelte";
  import "../global.css";
  import Footer from "components/Footer.svelte";
  import Header from "components/Header.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<Header auth_session={data.auth_session} />
<slot />
<Footer />
<BackgroundCanvas />

<style>
</style>
