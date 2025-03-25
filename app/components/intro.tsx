'use client'

import { ReactTyped } from "react-typed";

import config from "../config.json";


export default function Intro() {
  const { text, enableTyped, typedStrings } = config.profile.intro;
  return (
    enableTyped ? (
      <ReactTyped
	strings={typedStrings}
	typeSpeed={80}
	backDelay={1100}
	backSpeed={30}
	loop
      />
    ): <p>{text}</p>
  );
}
