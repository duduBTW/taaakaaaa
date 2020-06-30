import React from "react";
import { OwO, Title, Content, CoisaCinza } from "../styles/idk";
import Conteudo from "../components/Portfolio/Conteudo";
import { itens } from "./itens.js";

export default function Commission() {
  return (
    <div>
      <OwO>
        <Title>Full scene</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          dolor eu enim viverra sodales. Sed efficitur mauris arcu, vel
          condimentum diam egestas eu. Praesent in diam justo.{" "}
        </Content>
      </OwO>
      <CoisaCinza>
        <Conteudo itens={itens.COMPLETA} selectedTag="COMPLETA" />
      </CoisaCinza>
    </div>
  );
}
