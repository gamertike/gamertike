import { SiGithub, SiNpm, SiRust, SiSpotify } from "solid-icons/si";
import { IconTypes } from "solid-icons";

import Link from "./Link";

interface SocialLinkProps {
  title: string;
  href: string;
  icon: IconTypes;
}

export default function SocialLinks() {
  return (
    <div class="flex items-center space-x-3 text-2xl">
      <SocialLink title="GitHub" href="/github" icon={SiGithub} />
      <SocialLink title="Crates.io" href="/crates.io" icon={SiRust} />
      <SocialLink title="NPM" href="/npm" icon={SiNpm} />
      <SocialLink title="Spotify" href="/spotify" icon={SiSpotify} />
    </div>
  );
}

function SocialLink(props: SocialLinkProps) {
  return (
    <Link
      href={props.href}
      class="text-white hover:text-blue-500 hover:scale-110 transition ease-in-out"
      target="_blank"
    >
      <props.icon title={props.title} />
    </Link>
  );
}
