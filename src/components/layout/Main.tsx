import CurrentlyPlaying from "../ui/CurrentlyPlaying";
import Heading from "../ui/Heading";
import Link from "../ui/Link";
import Technologies from "../ui/Technologies";
import TypeWriter from "../ui/TypeWriter";

export default function Main() {
  return (
    <main class="grow p-8 max-w-5xl w-full mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-5">
        <Title />
        <CurrentlyPlaying class="w-full lg:w-3/5" />
      </div>
      <Heading id="about">About me</Heading>
      <p>
        I{"'"}m a self-taught programmer located in the U.K who loves creating
        and maintaining projects as a hobby. The main programming language i use
        is{" "}
        <Link href="https://typescriptlang.org" target="_blank">
          TypeScript
        </Link>{" "}
        in combination with{" "}
        <Link href="http://nodejs.org" target="_blank">
          Node.js
        </Link>{" "}
        but i also love using{" "}
        <Link href="http://rust-lang.org" target="_blank">
          Rust
        </Link>
        . My preferred IDE is{" "}
        <Link href="https://code.visualstudio.com" target="_blank">
          Visual Studio Code
        </Link>
        .
      </p>
      <Heading id="technologies">Technologies I{"'"}ve used</Heading>
      <Technologies />
    </main>
  );
}

function Title() {
  return (
    <h1 class="text-4xl sm:text-5xl text-center grow">
      Hey, im
      <br />
      <Link href="/github">
        <TypeWriter text="Danielius" />
      </Link>
      !
    </h1>
  );
}
