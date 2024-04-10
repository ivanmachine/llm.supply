<script>
  export let primary = true;
  export let text = "";
  export let url = "#";
</script>

<a href={url} class:primary>
  <p>{text}</p>
</a>

<style>
  a {
    border-radius: 99px;
    height: fit-content;
    width: fit-content;
  }
  p {
    margin: 0;
    padding: 0.25rem 1rem;
    white-space: nowrap;
  }
  .primary {
    color: white;
    background-color: black;
  }
</style>
