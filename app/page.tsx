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
      <div className="text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
	  <div className="flex align-center gap-10">
	    <Image
	      className="rounded-full z-1 border-gradient"
	      src="https://avatars.githubusercontent.com/u/433609?v=4"
	      alt="Next.js logo"
	      width={180}
	      height={180}
	      priority
	    />
	    <div className="flex flex-col justify-center w-[160px]" style={{ width: "160px"}}>
	      <Intro />
	    </div>
	  </div>
	</main>
	<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
	  <a
	    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
	    href="https://www.linkedin.com/in/jonatan-anauati-997a0b44/"
	    target="_blank"
	    rel="noopener noreferrer"
	  >
	    <i className="fa fa-linkedin"></i>
	    Linkedin
	  </a>
	</footer>
      </div>
    </div>
  );
}
