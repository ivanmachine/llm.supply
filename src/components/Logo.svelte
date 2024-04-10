<script lang="ts">
  let showMenu = false;
  function handleRightClick(e: any) {
    e.preventDefault();
    showMenu = !showMenu;
  }
</script>

<a href="/" on:contextmenu={handleRightClick}>
  <img alt="llm.supply logo" src="/logo.svg" />
  {#if showMenu}
    <div class="downloadMenu">
      <button>Download svg</button>
      <button>Download png</button>
    </div>
  {/if}
</a>

<style>
  a {
    position: relative;
  }
  img {
    height: 1.5rem;
  }
  .downloadMenu {
    position: absolute;
    bottom: 0;
    transform: translate(0, 100%);
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  button {
    all: unset;
    width: 100%;
    padding: 0.15rem;
    background-color: gray;
  }
  button:hover {
    background-color: rgb(227, 227, 227);
  }
</style>
