import React, { useState } from "react";
import Conteudo from "../components/Portfolio/Conteudo";
import { ButtonFilter, PageTitles, CoisaCinza } from "./idk"
// import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("TODOS");
  return (
    <div>
      <CoisaCinza>
        <PageTitles>PORTFOLIO</PageTitles>
        <br />
        <ButtonFilter onClick={() => setSelectedTag("")}>
          TODOS
      </ButtonFilter>
        <ButtonFilter onClick={() => setSelectedTag("EMOTES")}>
          EMOTES
      </ButtonFilter>
        <ButtonFilter onClick={() => setSelectedTag("BUSTOS")}>
          BUSTOS
      </ButtonFilter>
        <ButtonFilter onClick={() => setSelectedTag("COMPLETA")}>
          COMPLETA
      </ButtonFilter>

        <Conteudo selectedTag={selectedTag} />
      </CoisaCinza>
    </div>
  );
}
