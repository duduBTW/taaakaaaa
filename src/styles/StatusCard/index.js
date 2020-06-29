import styled from "styled-components";

export const Conteiner = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardStepper = styled.div`
  position: relative;
  height: 335px;
  width: 335px;
  background: #a73138;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const CardStepperContent = styled.h2`
  color: white;
`;
export const InputStepper = styled.input`
  margin: 10px;
  width: 300px;
  padding: 13px 20px;
  font-size: 18px;
  border: 1px solid #a73138;
  border-radius: 8px;
  outline: none;
`;

export const ButtonStepper = styled.button`
  text-decoration: none;
  color: white;
  padding: 20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 30px;
  height: 45px;
  background-color: #a73138;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  border: none;
  font-size: 16px;
  &:hover {
    transform: translate3d(0, -2px, 0);
    background: #a73138;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: translate3d(0, 1px, 0);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: 0;
  }
`;
