<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>
  <div>
    <input type="text" placeholder="test" />
  </div>
  <div class="img">123</div>

  <!-- <img src="/Camera.png" /> -->

  <div class="bg">123</div>
  <p>На этом проекте отрабатывать PostCSS!!</p>
  <p class="bar">
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style global>
  @media screen and (width >= 500px) and (width <= 1200px) {
    /* OK!!! */
    .bar {
      display: block;
      /* background-color: burlywood; */
      /* OK!!! */
      background-color: gray(40);
      color: gray(90 / 99%);
    }
  }

  .bg {
    background: inline("public/Camera.png");
    width: 100px;
    height: 100px;
  }

  .img {
    /* background-image: resolve("Camera.png"); OK!!! */
    background-image: inline("public/Camera.png");
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    background-size: cover;
    background-position: center;
  }

  @media (min-resolution: 2dppx) {
    .img {
      background-image: url(image@2x.png);
    }
  }

  ::placeholder {
    color: rgb(33, 251, 0);
    font-weight: 600;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
