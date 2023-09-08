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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;

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
  height: 100px;
  margin: 0px 0 0 0;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

export const Toggle = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin: 7px 0 0 0;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const TextLink = styled.a`
  color: ${(props) => props.textColor};
  text-decoration: none;
  cursor: pointer;
`;
