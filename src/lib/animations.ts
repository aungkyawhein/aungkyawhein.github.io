import { elasticOut } from "svelte/easing";

export function typewriter(node: HTMLElement, { speed = 1 }): {
  duration: number;
  tick: (t: number) => void
} {
  const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(`This transition only works on elements with a single text node child`);
  }

  const text: string = node.textContent || '';
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t: number) => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}

export function spin(node: HTMLElement, { duration }: { duration: number }): {
  duration: number;
  css: (t: number) => string
} {
  return {
    duration,
    css: (t: number) => {
      const eased = elasticOut(t);

      return `
        transform: rotate(${eased * -2}deg);
      `;
    }
  };
}

export function zoom(node: HTMLElement, { duration }: { duration: number }): {
  duration: number;
  css: (t: number) => string
} {
  return {
    duration,
    css: (t: number) => {
      const eased = elasticOut(t);

      return `
        transform: scale(${eased});
      `;
    }
  };
}
