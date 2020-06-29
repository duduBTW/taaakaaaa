import React from "react";

const itens = [
  {
    image:
      "https://i.pinimg.com/736x/cd/42/e9/cd42e962f71aed2a9c9cdfe36758bd70.jpg",
    tag: "hifumi",
  },
  {
    image:
      "https://i.pinimg.com/736x/cd/42/e9/cd42e962f71aed2a9c9cdfe36758bd70.jpg",
    tag: "hifumi",
  },
  {
    image:
      "https://i.pinimg.com/736x/cd/42/e9/cd42e962f71aed2a9c9cdfe36758bd70.jpg",
    tag: "hifumi",
  },
  {
    image: "https://i.redd.it/zbfgjlff775y.jpg",
    tag: "hifumi-money",
  },
  {
    image: "https://i.redd.it/zbfgjlff775y.jpg",
    tag: "hifumi-money",
  },
  {
    image: "https://i.redd.it/zbfgjlff775y.jpg",
    tag: "hifumi-money",
  },
  {
    image: "https://static.zerochan.net/Takimoto.Hifumi.full.2025732.jpg",
    tag: "hifumi-super-cute",
  },
  {
    image: "https://static.zerochan.net/Takimoto.Hifumi.full.2025732.jpg",
    tag: "hifumi-super-cute",
  },
  {
    image: "https://static.zerochan.net/Takimoto.Hifumi.full.2025732.jpg",
    tag: "hifumi-super-cute",
  },
  {
    image: "https://static.zerochan.net/Takimoto.Hifumi.full.2025732.jpg",
    tag: "hifumi-super-cute",
  },
];

export default function Conteudo({ selectedTag }) {
  return (
    <div>
      {itens.map((item) =>
        selectedTag === item.tag ? <img src={item.image} alt="" /> : null
      )}
    </div>
  );
}
