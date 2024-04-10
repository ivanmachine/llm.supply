<script>
  import Logo from "./Logo.svelte";
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="c">
    <Logo />
    <div class="socials">
      <a href="/"><img src="/x.svg" alt="twitter | x logo" /></a>
      <a href="/"><img src="/instagram.svg" alt="instagram logo" /></a>
      <a href="/"><img src="/github.svg" alt="github logo" /></a>
    </div>
    <nav>
      <a href="/chat">↗ chat</a>
      <a href="/pricing">pricing</a>
      <a href="/about">about</a>
      <a href="/contact">contact</a>
    </nav>
  </div>

  <span class="copyright">
    <p>Copyright {currentYear}</p>
    <p class="splitter">|</p>
    <p>Made with ❤️ by Ivan Tarnyagin</p>
  </span>
</footer>

<style>
  footer {
    margin-top: auto;
  }
  .c {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    justify-content: center;
    align-items: center;
    grid-template-areas:
      "logo    socials"
      "nav     . ";
  }
  /* logo */
  .c > a {
    grid-area: logo;
  }
  .socials {
    margin-left: auto;
    grid-area: socials;
    display: flex;
    gap: 1rem;
  }
  .socials img {
    height: 1rem;
  }
  nav {
    grid-area: nav;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 2rem 0;
  }

  .copyright {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
  }

  @media screen and (max-width: 800px) {
    .copyright {
      flex-direction: column;
      gap: 0;
    }
    .splitter {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .socials {
      flex-direction: column;
    }
    .c {
      grid-template-areas:
        "logo    ."
        "nav     socials";
    }
  }
</style>
