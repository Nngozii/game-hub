import { Card, CardBody, Heading, Icon, Image } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";

import type { Game } from "../../hooks/GameGrid";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card.Root padding={"10px"} borderRadius={"20px"}>
      <Image src={games.thumbnail} />
      <CardBody>
        <Heading fontSize={"1xl"}>{games.title}</Heading>
        <Icon color={"gray.500"} marginY={"10px"}><FaWindows /></Icon> {/*windows Icon*/}
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
