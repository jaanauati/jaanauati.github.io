
import config from "../../config.json";

import style from "./stars.module.scss";

export default function Background() {
  return (
    config.layout.background === "stars" ? (
      <div className="bg-black h-screen w-screen fixed -z-1">
	<div className={style.stars} />
	<div className={style.stars2} />
	<div className={style.stars3} />
      </div>
    ): null
  );
}
