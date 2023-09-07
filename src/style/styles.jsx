import styled from "styled-components";

const colors = {
  mainBlack: "#151515",
  mainWhite: "#f9f9f9",
  dayLight: "#f2ffb9",
  darkMode: "#1e3135",
};

export const Wrap = styled.div`
  max-width: 499px;
  height: 735px;
  padding: 21px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
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
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: ${(props) => props.textColor};
`;

export const Github = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Cordinate = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  width: 247px;
`;
