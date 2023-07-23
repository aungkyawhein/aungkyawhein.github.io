<script>
  import Container from "./Container.svelte";

  import linkedinIcon from "$lib/assets/In-White-128@2x.png";
  import githubIcon from "$lib/assets/github-mark-white.png";
  import logo from "$lib/assets/logo-transparent.png";

  const navLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aung-kyaw-hein",
      icon: linkedinIcon,
    },
    {
      name: "Github",
      url: "https://github.com/aungkyawhein",
      icon: githubIcon,
    },
  ];
</script>

<header class="py-4">
  <Container>
    <nav class="flex justify-between items-center">
      <img src={logo} alt="Logo" width="60" height="60" />
      <ul class="flex gap-4">
        {#each navLinks as navLink}
          <li>
            <a
              href={navLink.url}
              class="hover:opacity-75 transition-opacity"
              target="_blank"
            >
              <img
                src={navLink.icon}
                alt={navLink.name}
                width="24"
                height="24"
              />
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </Container>
</header>
