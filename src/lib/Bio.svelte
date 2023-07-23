<script>
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
</script>

<section class="py-4 text-light">
  <Container>
    <h1 class="text-5xl md:text-6xl mb-2">{name}</h1>
    <p class="text-2xl mb-8">{title}</p>
    <p class="max-w-xl">{description}</p>
    <div class={quoteClass}>
      <p class="">{quote}</p>
    </div>
    <p class="max-w-xl">{message}</p>
  </Container>
</section>
