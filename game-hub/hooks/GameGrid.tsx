import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "../src/components/GameCard";
import { useEffect, useState } from "react";
import apiClient from "../src/services/api-client";

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  platform: string;
}

const GameGrid = ({}: Game) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/games")
      .then((game) => {
        setGames(game.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap="40px" padding={"10px"}>
        {games.map((game) => (
          <GameCard key={game.id} games={game}/>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
