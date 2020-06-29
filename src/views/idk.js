import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const RobotoBold = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`

export const CoisaCinza = styled.div`
    background-color: #EFEFEF;
    margin: 0px 52px;
    height: 1000px;

`

export const OwO = styled.div`
    display: flex;
    flex-direction: column;
    height: 311px;
    background: #CB4850;
    display: flex;
    margin: 0px 52px;
`;

export const Title = styled.h1`
    padding: 50px 0px 0px 75px;
    margin: 0px;
    font-size: 48px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-weight: 640;
    `
export const Content = styled.div`
    padding: 10px 100px 0px 75px;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-weight: 640;
`

