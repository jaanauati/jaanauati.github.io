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
      <div className="text-white grid grid-rows-[20px_1fr_15px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	<main className="flex flex-col justify-start gap-2 row-start-2 items-center sm:items-start">
	  <Image
	    className="rounded-full z-1 border-gradient"
	    src="https://avatars.githubusercontent.com/u/433609?v=4"
	    alt="Next.js logo"
	    width={180}
	    height={180}
	    priority
	  />
	  <div className="flex flex-col justify-center w-[160px] text-xl" style={{ width: "200px", height: 100 }}>
	    <Intro />
	  </div>
	</main>
	<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
