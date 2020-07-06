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

import { Transition } from "react-spring/renderprops";

export default function Modal({ open = false, children, onClose }) {
  useKeyboardEvent("Escape", () => {
    onClose();
  });

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  if (open) {
    return (
      <Conteiner onClick={onClose}>
        <Transition
          from={{ transform: "translate3d(0,-100px,0)" }}
          enter={{ transform: "translate3d(0,0px,0)" }}
          leave={{ transform: "translate3d(0,-100px,0)" }}
        >
          {() => (props) => (
            <Card style={props} onClick={handleChildClick}>
              <Transition
                delay={50}
                from={{ transform: "translate3d(-100px,-50px,0)", opacity: 0 }}
                enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
                leave={{
                  transform: "translate3d(-100px,-100px,0)",
                  opacity: 0,
                }}
              >
                {() => (props) => <TopImage style={props} src={Top} alt="" />}
              </Transition>
              <CardContent>{children}</CardContent>
              <Transition
                delay={50}
                from={{ transform: "translate3d(100px,50px,0)", opacity: 0 }}
                enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
                leave={{ transform: "translate3d(100px,50px,0)", opacity: 0 }}
              >
                {() => (props) => (
                  <BottomImage style={props} src={Bottom} alt="" />
                )}
              </Transition>
            </Card>
          )}
        </Transition>
      </Conteiner>
    );
  }

  return null;
}
