import React, { useState } from "react";
import Conteudo from "../components/Portfolio/Conteudo";
import { ButtonFilter, PageTitles, CoisaCinza } from "../styles/idk";
// import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";
import { itens } from "./itens.js";

const buttons = [{ name: "EMOTES" }, { name: "BUSTOS" }, { name: "COMPLETA" }];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("COMPLETA");
  return (
    <div>
      <CoisaCinza>
        <PageTitles>PORTFOLIO</PageTitles>
        {buttons.map((button) => (
          <ButtonFilter
            active={button.name === selectedTag ? true : false}
            onClick={() => setSelectedTag(button.name)}
          >
            {button.name}
          </ButtonFilter>
        ))}
        <Conteudo itens={itens[selectedTag]} selectedTag={selectedTag} />
      </CoisaCinza>
    </div>
  );
}
