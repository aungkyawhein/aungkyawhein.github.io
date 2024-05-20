<script>
  import logo from "$lib/assets/logo-transparent.png";
  import Container from "./Container.svelte";
</script>

<header class="py-4">
  <Container>
    <nav class="flex justify-between items-center">
      <img src={logo} alt="Logo" width="60" height="60" />
    </nav>
  </Container>
</header>
