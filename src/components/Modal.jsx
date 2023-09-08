import React, { useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import * as St from "../style/styles";

const BuildModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <St.Modal onClick={closeModal}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kaminari_oto"
          options={{ width: 341, height: 400, theme: "light" }}
        />
      </St.Modal>
    </>
  );
};

const Modal = ({ mode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const paintModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <St.TextLink
        onClick={paintModal}
        style={{ color: mode ? "#f9f9f9" : "#151515" }}
      >
        twitter : kaminari_oto
      </St.TextLink>
      {modalOpen && <BuildModal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Modal;
