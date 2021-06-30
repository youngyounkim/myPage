import styled from "styled-components";

const base = styled.div`
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.color.main};
`;

const contentbox = styled.div`
  width: 80vw;
  height: 50px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
`;

const link = styled.a``;
const icombox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const title = styled.h1`
  display: inline-block;
  margin: 0px;
`;

const icon = styled.img`
  width: 42px;
  height: 42px;
  margin: 4px 4px;
  filter: invert(100%);
  :hover {
    filter: invert(0%);
  }
`;

export const HeaderStyle = {
  base,
  contentbox,
  icombox,
  title,
  link,
  icon,
};
