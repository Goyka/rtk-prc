import styled from "styled-components";

const colors = {
  mainBlack: "#151515",
  mainWhite: "#f9f9f9",
  dayLight: "#f2ffb9",
  darkMode: "#1e3135",
};

export const Wrap = styled.div`
  max-width: 1440px;
  height: 735px;
  padding: 21px;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    padding: 17px;
  }

  @media (max-width: 480px) {
    padding: 11px;
  }
`;

export const Nav = styled.header`
  display: flex;
  vertical-align: auto;
  width: max-content;
  height: 100px;
  margin: 0px 0 0 0;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const Toggle = styled.span`
  font-size: 19px;
  font-weight: 500;
  margin: 9px 0 0 0;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 361px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
`;

export const TextLink = styled.a`
  width: max-content;
  color: ${(props) => props.textColor};
  text-decoration: none;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: absolute;
  padding: 51px;
  width: max-content;
  height: max-content;
`;
