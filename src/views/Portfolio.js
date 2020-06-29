import React, { useState } from "react";
import Conteudo from "../components/Portfolio/Conteudo";
import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("hifumi");
  return (
    <div>
      <h1>PORTFOLIO</h1>
      <br />
      <ButtonStepper onClick={() => setSelectedTag("hifumi")}>
        hifumi
      </ButtonStepper>
      <ButtonStepper onClick={() => setSelectedTag("hifumi-money")}>
        hifumi-money
      </ButtonStepper>
      <ButtonStepper onClick={() => setSelectedTag("hifumi-super-cute")}>
        hifumi-super-cute
      </ButtonStepper>
      <Conteudo selectedTag={selectedTag} />
    </div>
  );
}
