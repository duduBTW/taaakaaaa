import React from "react";
import { OwO, Title, Content, CoisaCinza } from "../styles/idk";
import Conteudo from "../components/Portfolio/Conteudo";
import { ButtonStepper } from "../styles/StatusCard";
import { itens } from "./itens.js";

import Modal from "../components/Modal";

export default function Commission() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal onClose={() => setOpen(false)} open={open}>
        Pog
      </Modal>
      <OwO>
        <Title>Full scene</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          dolor eu enim viverra sodales. Sed efficitur mauris arcu, vel
          condimentum diam egestas eu. Praesent in diam justo.{" "}
        </Content>
        <ButtonStepper onClick={() => setOpen(true)}>
          Change Status
        </ButtonStepper>
      </OwO>
      <CoisaCinza>
        <Conteudo itens={itens.COMPLETA} selectedTag="COMPLETA" />
      </CoisaCinza>
    </div>
  );
}
