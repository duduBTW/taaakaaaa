import styled from "styled-components";

export const Conteiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* bottom: 0; */
  right: 0;
  min-height: 100vh;
  max-width: 100vw;
  /* width: 100vw; */
  z-index: 2;
  background-color: rgb(10, 0, 3, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  min-width: 400px;
  min-height: 300px;
  max-width: 100%;
  /* display: flex;
  justify-content: center; */
  background-color: white;
  border-radius: 10px;
  z-index: 3;
`;

export const TopImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-radius: 7px 7px 0px 0px;
`;
export const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  /* left: 0; */
  /* right: 0; */
  width: 100%;
  border-radius: 0px 0px 7px 7px;
  /* transform: rotateX(180deg) rotateY(180deg); */
`;

export const CardContent = styled.div`
  margin-top: 10px;
  padding: 30px;
`;
