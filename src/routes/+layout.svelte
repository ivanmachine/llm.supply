<script>
  import BackgroundCanvas from "./../components/BackgroundCanvas.svelte";
  import "../global.css";
  import Footer from "components/Footer.svelte";
  import Header from "components/Header.svelte";
</script>

<Header />
<slot />
<Footer />
<BackgroundCanvas />

<style>
</style>
