import React, { useState } from "react";
import { getLogo } from "../helpers/SVGHelpers";

const delay = 3000;
let interval = null;

const Logo = () => {
  const [isClosed, setIsClosed] = useState(false);
  const logo = getLogo();

  if(interval) clearInterval(interval);

  interval = setInterval(() => {
    setIsClosed(!isClosed);
  }, delay);

  const logoClass = isClosed ? "logo closed" : "logo open";

  return <div className={logoClass}>{logo}</div>;
};
export default Logo;
