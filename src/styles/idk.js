import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const RobotoBold = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const CoisaCinza = styled.div`
  background-color: #efefef;
  padding-left: 75px;
  margin: 0px 52px;
  padding-bottom: 75px;
`;

export const OwO = styled.div`
  display: flex;
  flex-direction: column;
  height: 311px;
  background: #cb4850;
  display: flex;
  margin: 0px 52px;
`;

export const Title = styled.h1`
  padding: 50px 0px 0px 75px;
  margin: 0px;
  font-size: 48px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: 640;
`;
export const Content = styled.div`
  padding: 10px 100px 0px 75px;
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: 640;
`;

export const PageTitles = styled.h1`
  font-size: 48px;
  font-weight: bold;
  padding: 50px 0px 5px 12px;
  margin: 0px;
`;

export const ButtonFilter = styled.button`
  background-color: ${(props) => (props.active ? "#cb4850" : "#777777")};
  font-size: 20px;
  border-radius: 23px;
  min-width: 158px;
  height: 47px;
  margin: 15px 10px;
  border: none;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  &:hover {
    background-color: ${(props) => (props.active ? "#ab1f27" : "#545454")};
  }
`;

export const Gallery = styled.img`
  /* width: 246px; */
  height: 246px;
  border-radius: 10px;
  margin: 12px;
  object-fit: cover;
  object-position: left;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
