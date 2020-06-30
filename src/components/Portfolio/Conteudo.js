import React from "react";
import { Gallery } from "../../views/idk";

const itens = [
  {
    image:
      "https://pbs.twimg.com/media/EXsoRW1WAAAZu_y?format=jpg&name=small",
    tag: "COMPLETA"
  },
  {
    image:
      "https://pbs.twimg.com/media/EYPs8xoXkAA3F60?format=jpg&name=4096x4096",
    tag: "COMPLETA"
  },
  {
    image:
      "https://pbs.twimg.com/media/EZZYqP1WAAAt2aJ?format=jpg&name=4096x4096",
    tag: "COMPLETA"
  },
  {
    image: "https://pbs.twimg.com/media/EZtzy8vWAAA83UN?format=jpg&name=900x900",
    tag: "BUSTOS"
  },
  {
    image: "https://pbs.twimg.com/media/EaEOaPPXYAApjfe?format=jpg&name=small",
    tag: "BUSTOS"
  },
  {
    image: "https://pbs.twimg.com/media/Ea90fOzWoAAeHmn?format=jpg&name=large",
    tag: "COMPLETA"
  },
  {
    image: "https://pbs.twimg.com/media/EbkDeZPXsAAI-Yq?format=jpg&name=large",
    tag: "BUSTOS"
  },
  {
    image: "https://cdn.discordapp.com/attachments/684813872363995156/727552534431924265/confused.png",
    tag: "EMOTES"
  },
  {
    image: "https://media.discordapp.net/attachments/684813872363995156/727552536969740358/crying.png?width=450&height=450",
    tag: "EMOTES"
  },
  {
    image: "https://media.discordapp.net/attachments/684813872363995156/727552538794000494/down.png?width=450&height=450",
    tag: "EMOTES"
  },
  {
    image: "https://media.discordapp.net/attachments/684813872363995156/727552540581036092/glasses.png?width=450&height=450",
    tag: "EMOTES"
  },
  {
    image: "https://media.discordapp.net/attachments/684813872363995156/727552542426529823/right.png?width=450&height=450",
    tag: "EMOTES"
  },
  {
    image: "https://media.discordapp.net/attachments/684813872363995156/727552544112640110/sad.png?width=450&height=450",
    tag: "EMOTES",
  },


];

export default function Conteudo({ selectedTag }) {
  return (
    <div>
      {itens.map((item) =>
        selectedTag === item.tag ? <Gallery src={item.image} alt="" /> : null
      )}
    </div>
  );
}
