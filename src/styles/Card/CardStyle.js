import styled from "styled-components";
import { keyFrameExampleOne } from "./Animation";
import CardBottom from "../../components/Card/CardBottom.png";

export const CardBottomBackground = styled.div`
  position: relative;
  transition: transform 600ms;
  height: 335px;
  width: 100%;
`;
export const CardStyle = styled.div`
  max-height: 335px;
  max-width: 276px;
  margin: 30px;
  position: relative;
  transition: transform 600ms;
  display: flex;
  align-items: flex-end;
`;

export const CardBottomImg = styled.img`
  white-space: nowrap;
  position: absolute;
  width: 100%;
  background-size: 100%;
  bottom: 0px;
`;

export const CardTopBackground = styled.img`
  position: absolute;
  top: 0px;
  width: 100%;
`;
export const CardContent = styled.h2`
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  z-index: 2;
  color: white;
  width: 100%;
`;
