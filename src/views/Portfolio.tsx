import React, { useState } from "react";
import Conteudo from "../components/Portfolio/Conteudo";
import { ButtonFilter, PageTitles, CoisaCinza } from "../styles/idk";
// import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";
import { itens } from "./itens.js";

const buttons: Array<"COMPLETA" | "BUSTOS" | "EMOTES"> = [
  "EMOTES",
  "BUSTOS",
  "COMPLETA",
];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState<
    "COMPLETA" | "BUSTOS" | "EMOTES"
  >("COMPLETA");

  return (
    <div>
      <CoisaCinza>
        <PageTitles>PORTFOLIO</PageTitles>
        <div style={{ display: "flex" }}>
          {buttons.map((button) => (
            <ButtonFilter
              active={button === selectedTag ? true : false}
              onClick={() => setSelectedTag(button)}
            >
              {button}
            </ButtonFilter>
          ))}
        </div>
        <Conteudo itens={itens[selectedTag]} selectedTag={selectedTag} />
      </CoisaCinza>
    </div>
  );
};

export default Portfolio;
