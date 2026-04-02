import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

import heroImage from "../assets/hero.png";
import type { Game } from "../../hooks/GameGrid";

interface Props {
  games: Game
}

const GameCard = ({games}: Props) => {
  return (
    <Card.Root padding={"10px"} borderRadius={"20px"}>
      <Image src={games.thumbnail} />
      <CardBody>
        <Heading fontSize={"1xl"}>{games.title}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
