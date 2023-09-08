import React, { useState } from "react";
import * as St from "../style/styles";

const Body = ({ mode }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <St.Container
      style={{
        background: mode ? "#34344d" : "#f2ffb9",
      }}
    >
      <St.TextLink
        href="https://goo.gl/maps/9qBiBuzCWJ4M7WYv9"
        onMouseEnter={handleMouseHover}
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        {hover ? "37°32'58.6\"n  127°04'55.9\"e" : "••• location"}
      </St.TextLink>
      <St.TextLink
        href="https://github.com/Goyka"
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        link / github
      </St.TextLink>
      <St.TextLink
        href="https://velog.io/@gimgoya"
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        link / velog : knowledge store
      </St.TextLink>
    </St.Container>
  );
};

export default Body;
