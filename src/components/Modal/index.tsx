import React, { useState } from "react";

import {
  Conteiner,
  Card,
  TopImage,
  CardContent,
  BottomImage,
} from "../../styles/Modal";
import useKeyboardEvent from "../useKeyboardEvent";
import Top from "./Top.svg";
import Bottom from "./Bottom.svg";

import { Spring } from "react-spring/renderprops";

interface IModal {
  onClose: () => void;
  open: boolean;
}

const Modal: React.FC<IModal> = ({ open = false, children, onClose }) => {
  useKeyboardEvent("Escape", () => {
    onClose();
  });

  const handleChildClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  if (open) {
    return (
      <Conteiner onClick={onClose}>
        <Spring
          from={{ transform: "translate3d(0,-100px,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
        >
          {(props) => (
            <Card style={props} onClick={handleChildClick}>
              <Spring
                delay={50}
                from={{ transform: "translate3d(-100px,-50px,0)", opacity: 0 }}
                to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
              >
                {(props) => <TopImage style={props} src={Top} alt="" />}
              </Spring>
              <CardContent>{children}</CardContent>
              <Spring
                delay={50}
                from={{ transform: "translate3d(100px,50px,0)", opacity: 0 }}
                to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
              >
                {(props) => <BottomImage style={props} src={Bottom} alt="" />}
              </Spring>
            </Card>
          )}
        </Spring>
      </Conteiner>
    );
  }

  return null;
};

export default Modal;
