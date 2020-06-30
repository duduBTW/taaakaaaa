import React, { useState } from "react";
import Conteudo from "../components/Portfolio/Conteudo";
import { ButtonFilter, PageTitles, CoisaCinza } from "../styles/idk";
// import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";
import { itens } from "./itens.js";

const buttons = [{ name: "EMOTES" }, { name: "BUSTOS" }, { name: "COMPLETA" }];

// const itens = {
//   COMPLETA: [
//     {
//       image:
//         "https://pbs.twimg.com/media/EXsoRW1WAAAZu_y?format=jpg&name=small",
//     },
//     {
//       image:
//         "https://pbs.twimg.com/media/EYPs8xoXkAA3F60?format=jpg&name=4096x4096",
//     },
//     {
//       image:
//         "https://pbs.twimg.com/media/EZZYqP1WAAAt2aJ?format=jpg&name=4096x4096",
//     },
//     {
//       image:
//         "https://pbs.twimg.com/media/Ea90fOzWoAAeHmn?format=jpg&name=large",
//     },
//   ],
//   BUSTOS: [
//     {
//       image:
//         "https://pbs.twimg.com/media/EZtzy8vWAAA83UN?format=jpg&name=900x900",
//     },
//     {
//       image:
//         "https://pbs.twimg.com/media/EaEOaPPXYAApjfe?format=jpg&name=small",
//     },
//     {
//       image:
//         "https://pbs.twimg.com/media/EbkDeZPXsAAI-Yq?format=jpg&name=large",
//     },
//   ],
//   EMOTES: [
//     {
//       image:
//         "https://cdn.discordapp.com/attachments/684813872363995156/727552534431924265/confused.png",
//     },
//     {
//       image:
//         "https://media.discordapp.net/attachments/684813872363995156/727552536969740358/crying.png?width=450&height=450",
//     },
//     {
//       image:
//         "https://media.discordapp.net/attachments/684813872363995156/727552538794000494/down.png?width=450&height=450",
//     },
//     {
//       image:
//         "https://media.discordapp.net/attachments/684813872363995156/727552540581036092/glasses.png?width=450&height=450",
//     },
//     {
//       image:
//         "https://media.discordapp.net/attachments/684813872363995156/727552542426529823/right.png?width=450&height=450",
//     },
//     {
//       image:
//         "https://media.discordapp.net/attachments/684813872363995156/727552544112640110/sad.png?width=450&height=450",
//     },
//   ],
// };

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
