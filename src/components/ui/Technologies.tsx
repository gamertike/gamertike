import {
  SiCss3,
  SiDeno,
  SiDiscord,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRust,
  SiSolid,
  SiSvelte,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVisualstudiocode,
  SiVite,
} from "solid-icons/si";
import { JSX } from "solid-js";
import { IconTypes } from "solid-icons";

import Link from "./Link";

interface TechCategoryProps {
  title: string;
  children: JSX.Element;
}

interface TechnologyProps {
  title: string;
  href: string;
  icon: IconTypes;
}

export default function Technologies() {
  return (
    <ul class="grid sm:grid-cols-2 gap-5 grid-flow-row">
      <TechCategory title="Tools">
        <Technology
          title="Visual Studio Code"
          href="https://code.visualstudio.com"
          icon={SiVisualstudiocode}
        />
        <Technology title="GIT" href="https://git-scm.com" icon={SiGit} />
        <Technology title="GitHub" href="https://github.com" icon={SiGithub} />
        <Technology
          title="MongoDB"
          href="https://mongodb.com"
          icon={SiMongodb}
        />
        <Technology
          title="PostgreSQL"
          href="https://www.postgresql.org"
          icon={SiPostgresql}
        />
      </TechCategory>
      <TechCategory title="Languages">
        <Technology
          title="HTML"
          href="https://w3schools.com/html"
          icon={SiHtml5}
        />
        <Technology
          title="CSS"
          href="https://w3schools.com/css"
          icon={SiCss3}
        />
        <Technology
          title="JavaScript"
          href="https://javascript.com"
          icon={SiJavascript}
        />
        <Technology
          title="TypeScript"
          href="https://typescriptlang.org"
          icon={SiTypescript}
        />
        <Technology title="Rust" href="https://rust-lang.org" icon={SiRust} />
      </TechCategory>
      <TechCategory title="Frameworks & Libraries">
        <Technology
          title="Tailwind CSS"
          href="https://tailwindcss.com"
          icon={SiTailwindcss}
        />
        <Technology
          title="React.js"
          href="https://reactjs.org"
          icon={SiReact}
        />
        <Technology
          title="Solid.js"
          href="https://www.solidjs.com"
          icon={SiSolid}
        />
        <Technology
          title="Next.js"
          href="https://nextjs.org"
          icon={SiNextdotjs}
        />
        <Technology title="Vite" href="https://vitejs.dev" icon={SiVite} />
        <Technology title="Tauri" href="https://tauri.app" icon={SiTauri} />
        <Technology
          title="Discord.js"
          href="https://discord.js.org"
          icon={SiDiscord}
        />
        <Technology title="Svelte" href="https://svelte.dev" icon={SiSvelte} />
      </TechCategory>
      <TechCategory title="Runtimes">
        <Technology
          title="Node.js"
          href="https://nodejs.org"
          icon={SiNodedotjs}
        />
        <Technology title="Deno" href="https://deno.land" icon={SiDeno} />
      </TechCategory>
    </ul>
  );
}

function TechCategory(props: TechCategoryProps) {
  const id = () => props.title.replaceAll(" ", "-").toLowerCase();

  return (
    <li class="bg-zinc-800 p-6 gap-5 rounded-lg space-y-5">
      <Link href={`#${id()}`} class="text-white text-2xl">
        <h3 id={id()}>{props.title}</h3>
      </Link>
      <ul class="flex flex-wrap justify-evenly gap-8">{props.children}</ul>
    </li>
  );
}

function Technology(props: TechnologyProps) {
  return (
    <li>
      <Link
        href={props.href}
        class="text-6xl lg:text-7xl text-white hover:scale-110 transition ease-in-out hover:text-blue-500"
        target="_blank"
      >
        <props.icon title={props.title} />
      </Link>
    </li>
  );
}
