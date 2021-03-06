import styled from "styled-components/macro";

export const AppStyled = styled.div`
  height: 100vh;
  background-image: url("/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  @media (max-width: 900px) {
    height: 100%;
  }
`;

export const AppWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 100px);
  overflow-x: hidden;

  @media (max-width: 900px) {
    height: 100%;
  }
`;
