'use client'

import { ReactTyped } from "react-typed";


interface Props {}

export default function Intro(props: Props) {
  return (
    <ReactTyped
      strings={[
	`Hello, I am Jonatan,\nFrontend Developer`,
	"Hello, I am Jonatan,\nBackend Developer",
	"Hello, I am Jonatan,\nFullstack Developer",
	":q!"
      ]}
      typeSpeed={80}
      backDelay={1100}
      backSpeed={30}
      loop
    />
  );
}
