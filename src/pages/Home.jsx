import React, { useState } from "react";
import * as St from "../style/styles";

const Home = () => {
  const [mode, setMode] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <St.Wrap
      style={{
        background: mode ? "#1e3135" : "#f2ffb9",
        color: mode ? "#f9f9f9" : "#151515",
      }}
    >
      <St.Nav>
        <St.Title>✦ﾠfrontend engineer</St.Title>
        <St.Title>goya gim</St.Title>
        <br />
        <St.Toggle
          onClick={() => {
            setMode(!mode);
          }}
        >
          ↺
        </St.Toggle>
        <br />
      </St.Nav>
      <St.Container
        style={{
          background: mode ? "#1e3135" : "#f2ffb9",
          color: mode ? "#f9f9f9" : "#151515",
        }}
      >
        <St.TextLink
          href="https://github.com/Goyka"
          style={{ color: mode ? "#f9f9f9" : "#151515" }}
        >
          link / github
        </St.TextLink>
        <St.TextLink
          href="https://goo.gl/maps/9qBiBuzCWJ4M7WYv9"
          onMouseEnter={handleMouseHover}
          style={{ color: mode ? "#f9f9f9" : "#151515" }}
        >
          {hover ? "37°32'58.6\"N  127°04'55.9\"E" : "••• location"}
        </St.TextLink>
      </St.Container>
    </St.Wrap>
  );
};
export default Home;
