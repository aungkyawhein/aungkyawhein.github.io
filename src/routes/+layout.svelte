<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<div class="w-full h-screen flex flex-col justify-between">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.dark);
  }
</style>
