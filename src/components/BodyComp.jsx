import React, { useCallback, useState } from "react";
import * as St from "../style/styles";

const BodyComp = () => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover((prevHover) => !prevHover);
  };

  return (
    <St.Container>
      <St.Github to="https://github.com/Goyka">link / github</St.Github>
      <St.Cordinate
        to="https://goo.gl/maps/9qBiBuzCWJ4M7WYv9"
        onMouseEnter={handleMouseHover}
      >
        {hover ? "37°32'58.6\"N 127°04'55.9\"E" : "•••location"}
      </St.Cordinate>
    </St.Container>
  );
};

export default BodyComp;
