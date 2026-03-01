import { SiSpotify } from "solid-icons/si";
import { AiOutlinePause } from "solid-icons/ai";
import { For, Show, createSignal, onCleanup, JSX } from "solid-js";

import { cn, CurrentlyPlayingData, getCurrentlyPlaying } from "~/util";
import Link from "../ui/Link";

export default function CurrentlyPlaying(
  props: JSX.HTMLAttributes<HTMLDivElement>,
) {
  const [currentlyPlaying, setCurrentlyPlaying] =
    createSignal<CurrentlyPlayingData | null>(null);

  // Update the currently playing track every second
  // Spotify doesn't provide a websocket API for this
  const interval = setInterval(async () => {
    setCurrentlyPlaying(await getCurrentlyPlaying());
  }, 1_000);

  onCleanup(() => clearInterval(interval));

  return (
    <div
      {...props}
      class={cn(
        "bg-green-600 border-4 border-green-700 p-5 rounded-lg flex gap-5 items-center",
        props.class,
      )}
    >
      <Show when={currentlyPlaying()} fallback={<SiSpotify class="text-7xl" />}>
        <div class="relative min-w-20 h-20">
          <img
            class="w-full h-full rounded-md select-none pointer-events-none shadow-2xl"
            classList={{ "blur-xs": !currentlyPlaying()!.isPlaying }}
            src={currentlyPlaying()!.albumImageUrl}
            alt="Album image"
          />
          <Show when={!currentlyPlaying()!.isPlaying}>
            <AiOutlinePause class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl" />
          </Show>
        </div>
      </Show>
      <div class="grow flex flex-col justify-between">
        <Show
          when={currentlyPlaying()}
          fallback={
            <p class="text-3xl text-center text-zinc-200">
              No currently playing track
            </p>
          }
        >
          <TrackName {...currentlyPlaying()!} />
          <Artists {...currentlyPlaying()!} />
          <TrackProgress {...currentlyPlaying()!} />
        </Show>
      </div>
    </div>
  );
}

function TrackName(props: CurrentlyPlayingData) {
  return (
    <p class="text-2xl line-clamp-1">
      <Link
        class="text-white hover:underline hover:brightness-100"
        href={props.spotifyUrl}
        target="_blank"
      >
        {props.trackName}
      </Link>
    </p>
  );
}

function Artists(props: CurrentlyPlayingData) {
  return (
    <p class="text-lg line-clamp-1">
      <For each={props.artists}>
        {(artist, index) => (
          <>
            <Link
              class="text-white hover:underline hover:brightness-100"
              href={artist.spotifyUrl}
              target="_blank"
            >
              {artist.name}
            </Link>
            <Show when={index() < props.artists.length - 1}>, </Show>
          </>
        )}
      </For>
    </p>
  );
}

function TrackProgress(props: CurrentlyPlayingData) {
  return (
    <div class="flex gap-4 text-lg items-center">
      <p class="text-zinc-200">{formatTime(props.progressMs)}</p>
      <div class="w-full h-2 rounded-full bg-zinc-600">
        <div
          class="bg-white h-full rounded-full transition-all"
          style={{
            width: `${(props.progressMs / props.durationMs) * 100}%`,
          }}
        />
      </div>
      <p class="text-zinc-200">{formatTime(props.durationMs)}</p>
    </div>
  );
}

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
}
