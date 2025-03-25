import Image from "next/image";
import Intro from "./components/intro";
import Background from "./components/background";

import config from "./config.json";

export default function Home() {
  return (
    <div>
      <Background />
      <div className="h-dvh text-white grid grid-rows-[1fr_5fr_1fr] align-start justify-items-center min-h-dvh gap-5 pb-0 md:pb-15 font-[family-name:var(--font-geist-sans)]">
	<nav />
	<main className="grid grid-rows-[180px_2fr] justify-items-center align-items-start gap-10">
	  <Image
	    className="rounded-full z-1 border-gradient"
	    src={config.profile.picture}
	    alt={config.seo.description}
	    width={180}
	    height={180}
	    priority
	  />
	  <div className="flex flex-col self-start max-w-[12rem] text-xl text-center">
	    <Intro />
	  </div>
	</main>
	<footer className="flex gap-6 flex-wrap align-start justify-center self-end  pb-5">
	  <a
	    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	    href={config.social.linkedin}
	    target="_blank"
	    rel="noopener noreferrer"
	  >
	    <i className="fa-brands fa-linkedin-in"></i>
	    Linkedin
	  </a>
	  <a
	    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	    href={config.social.github}
	    target="_blank"
	    rel="noopener noreferrer"
	  >
	    <i className="fa-brands fa-github"></i>
	    Github
	  </a>
	</footer>
      </div>
    </div>
  );
}
