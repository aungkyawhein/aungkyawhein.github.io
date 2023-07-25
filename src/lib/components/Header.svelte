<script>
  import Container from "./Container.svelte";

  import { zoom } from "$lib/animations";
  import linkedinIcon from "$lib/assets/In-White-128@2x.png";
  import githubIcon from "$lib/assets/github-mark-white.png";
  import logo from "$lib/assets/logo-transparent.png";
  import { animated } from "$lib/stores";

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

  let animate = Array.of(false, false);
  let i = 0;

  const animateNext = () => {
    ++i;
    animate[i] = true;
  };

  const unsubscribe = animated.subscribe((state) => {
    animate[0] = state;
  });
</script>

<header class="py-4">
  <Container>
    <nav class="flex justify-between items-center">
      <img src={logo} alt="Logo" width="60" height="60" />
      <ul class="flex gap-4">
        {#each navLinks as navLink, index}
          <li>
            <a
              href={navLink.url}
              class="hover:opacity-75 transition-opacity"
              target="_blank"
            >
              {#if animate[index]}
                <img
                  src={navLink.icon}
                  alt={navLink.name}
                  width="24"
                  height="24"
                  in:zoom={{ duration: 1000 }}
                  on:introend={animateNext}
                />
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </Container>
</header>
