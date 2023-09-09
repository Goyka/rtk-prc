import React, { useState } from "react";
import Modal from "./Modal";
import * as St from "../style/styles";

const Body = ({ mode }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <St.Container
      style={{
        background: mode ? "#34344d" : "#defcc1",
      }}
    >
      <St.TextLink
        href="https://goo.gl/maps/9qBiBuzCWJ4M7WYv9"
        onMouseEnter={handleMouseHover}
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        {hover ? "37°32'58.6\"n  127°04'55.9\"e" : "••• based in"}
      </St.TextLink>
      <Modal mode={mode} />
      <St.TextLink
        href="https://github.com/Goyka"
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        github profile / link
      </St.TextLink>
      <St.TextLink
        href="https://velog.io/@gimgoya"
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        velog : knowledge store / link
      </St.TextLink>
    </St.Container>
  );
};

export default Body;
