<script lang="ts">
  import ProfileButton from "./ProfileButton.svelte";
  import Logo from "./Logo.svelte";
  export let auth_session: string | undefined;
</script>

<header>
  <div class="c">
    <Logo />
    <nav>
      <a href="/chat">↗ chat</a>
      <a href="/pricing">pricing</a>
      <a href="/about">about</a>
      <a href="/contact">contact</a>
    </nav>
    <ProfileButton {auth_session} />
  </div>
</header>

<style>
  header {
    position: fixed;
    z-index: 10;
    backdrop-filter: blur(15px);
    background-color: #ffffffdd;
    top: 0;
    left: 0;
    right: 0;
  }
  .c {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }
  @media screen and (max-width: 1100px) {
    nav {
      display: none;
    }
  }
  @media screen and (min-width: 1100px) {
    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: center;
    }
  }
</style>
