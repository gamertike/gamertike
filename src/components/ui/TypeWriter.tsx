import { createEffect, createSignal } from "solid-js";
import { cn } from "~/util";

interface TypeWriterProps {
  text: string;
}

const MIN_DELAY_MS = 100;
const MAX_DELAY_MS = 300;

export default function TypeWriter(props: TypeWriterProps) {
  const [index, setIndex] = createSignal(0);
  const [isComplete, setIsComplete] = createSignal(false);

  createEffect(() => {
    // Generate a random delay
    const delayMs =
      Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS)) + MIN_DELAY_MS;

    // Check whether the text is complete
    if (index() === props.text.length) {
      setTimeout(() => void setIsComplete(true), delayMs * 10);
      return;
    }

    // Add a character to the text
    setTimeout(() => void setIndex(index() + 1), delayMs);
  });

  return (
    <span
      class={cn({
        "border-r-8 animate-border-pulse": !isComplete(),
      })}
    >
      {props.text.slice(0, index())}
    </span>
  );
}
