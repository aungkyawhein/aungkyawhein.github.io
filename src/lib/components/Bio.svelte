<script>
  import { spin, typewriter } from "$lib/animations";
  import { animated } from "$lib/stores";
  import { duration, speed } from "$lib/variables";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Container from "./Container.svelte";

  // Data
  const name = "Aung Kyaw Hein";
  const title = "Web Developer";
  const description =
    "Hey there! \
    I'm a web developer with a decade of experience, \
    currently working as a Frontend Development Supervisor \
    at a cool digital agency in Singapore.";
  const quote = "Web development is not my job. It's my hobby.";
  const message =
    "Hit me up for any exciting and fun projects! \
  I'm all ears and ready to dive into the adventure with you!";

  // CSS Class
  const quoteClass = [
    "max-w-fit",
    "my-12",
    "p-4",
    "rounded-md",
    "border",
    "border-current",
    "shadow-[5px_5px_15px_-5px_rgba(255,255,255,0.3)]",
    "-rotate-3",
  ].join(" ");

  // animation array
  let animate = Array.of(false, false, false, false, false);
  let i = 0;

  const animateNext = () => {
    ++i;
    animate[i] = true;
  };

  const animateEnd = () => {
    animated.update((state) => (state = true));
  };

  // start first animation on load
  onMount(() => {
    animate[i] = true;
  });
</script>

<section class="py-4 text-light">
  <Container>
    {#if animate[0]}
      <h1
        class="text-5xl md:text-6xl mb-2"
        in:fade={{ duration: duration / 2 }}
        on:introend={animateNext}
      >
        {name}
      </h1>
    {/if}

    {#if animate[1]}
      <p
        class="text-2xl mb-8"
        in:fly={{ y: 20, duration: duration }}
        on:introend={animateNext}
      >
        {title}
      </p>
    {/if}

    {#if animate[2]}
      <p
        class="max-w-xl"
        transition:typewriter={{ speed: speed }}
        on:introend={animateNext}
      >
        {description}
      </p>
    {/if}

    {#if animate[3]}
      <div
        class={quoteClass}
        in:spin={{ duration: duration / 2 }}
        on:introend={animateNext}
      >
        <p class="">{quote}</p>
      </div>
    {/if}

    {#if animate[4]}
      <p
        class="max-w-xl"
        transition:typewriter={{ speed: speed }}
        on:introend={animateEnd}
      >
        {message}
      </p>
    {/if}
  </Container>
</section>
