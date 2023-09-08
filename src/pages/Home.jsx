import React, { useState } from "react";
import Body from "../components/Body";
import * as St from "../style/styles";

const Home = () => {
  const [mode, setMode] = useState(false);

  return (
    <St.Wrap
      style={{
        background: mode ? "#34344d" : "#f2ffb9",
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
      <Body mode={mode} />
    </St.Wrap>
  );
};
export default Home;
