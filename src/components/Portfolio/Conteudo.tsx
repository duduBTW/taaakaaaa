import React from "react";
import { Gallery, Container } from "../../styles/idk";
import { useTrail, animated } from "react-spring";
import Modal from "../Modal/index";

const config = { mass: 5, tension: 2000, friction: 200 };

interface ItemContent {
  image: string;
}

interface Props {
  selectedTag: string;
  itens: Array<ItemContent>;
}

interface IOpen {
  status: boolean;
  index: number;
}

const Conteudo: React.FC<Props> = ({ selectedTag, itens }) => {
  const [open, setOpen] = React.useState<IOpen>({ status: false, index: 0 });

  const trail = useTrail(itens.length, {
    config,
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 150 },
  });

  return (
    <Container>
      {trail.map(({ y, ...rest }, index) => (
        <animated.div
          style={{
            ...rest,
            transform: y.interpolate((y) => `translate3d(${y}px,0px,0)`),
          }}
        >
          <>
            <Gallery
              onClick={() => setOpen({ status: true, index })}
              src={itens[index].image}
              alt=""
            />
          </>
        </animated.div>
      ))}
      <Modal
        onClose={() => setOpen({ status: false, index: 0 })}
        open={open.status}
      >
        <div style={{ margin: 50 }}>
          <img
            style={{ maxWidth: 700, maxHeight: 700 }}
            src={itens[open.index].image}
            alt=""
          />
        </div>
      </Modal>
    </Container>
  );
};

export default Conteudo;
