import React, { useState } from "react";
import Modal from "./Modal";
import * as St from "../style/styles";

const Body = ({ mode }) => {
  const [hoverMap, setHoverMap] = useState(false);
  const [hoverMusic, setHoverMusic] = useState(false);

  const handleMapHover = () => {
    setHoverMap((prevHover) => !prevHover);
  };
  const handleMusicHover = () => {
    setHoverMusic((prevHover) => !prevHover);
  };

  return (
    <St.Container
      style={{
        background: mode ? "#34344d" : "#defcc1",
      }}
    >
      <St.TextLink
        href="https://goo.gl/maps/9qBiBuzCWJ4M7WYv9"
        onMouseEnter={handleMapHover}
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        {hoverMap ? "37°32'58.6\"n  127°04'55.9\"e" : "••• based in"}
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
      <St.TextLink
        href="https://spotify.link/1mTCZ2Im2Cb"
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
        onMouseEnter={handleMusicHover}
      >
        {hoverMusic
          ? "Svaneborg Kardyb - Haven 💿"
          : "monthly album : september / sportify"}
      </St.TextLink>
    </St.Container>
  );
};

export default Body;
