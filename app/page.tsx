import Image from "next/image";
import Intro from "./components/intro";

import style from "./stars.module.scss";

export default function Home() {
  return (
    <div>
      <div className="bg-black h-screen w-screen fixed -z-1">
	<div className={style.stars} />
	<div className={style.stars2} />
	<div className={style.stars3} />
      </div>
      <div className="h-dvh text-white grid grid-rows-[1fr_5fr_1fr] align-start justify-items-center min-h-dvh gap-5 pb-0 md:pb-20 font-[family-name:var(--font-geist-sans)]">
	<nav />
	<main className="grid grid-rows-[1fr_2fr] justify-items-center gap-10">
	  <Image
	    className="rounded-full z-1 border-gradient"
	    src="https://avatars.githubusercontent.com/u/433609?v=4"
	    alt="Next.js logo"
	    width={180}
	    height={180}
	    priority
	  />
	  <div className="flex flex-col self-start max-w-[12rem] text-xl">
	    <Intro />
	  </div>
	</main>
	<footer className="flex gap-6 flex-wrap align-center justify-center self-end">
	  <a
	    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	    href="https://www.linkedin.com/in/jonatan-anauati-997a0b44/"
	    target="_blank"
	    rel="noopener noreferrer"
	  >
	    <i className="fa-brands fa-linkedin-in"></i>
	    Linkedin
	  </a>
	  <a
	    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	    href="https://github.com/jaanauati/"
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
