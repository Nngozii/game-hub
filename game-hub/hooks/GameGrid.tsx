import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "../src/components/GameCard";
import GameCarSkeleton from "../src/components/GameCarSkeleton";
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
  const [isLoading, setIsLoading] = useState(false);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/games")
      .then((game) => {
        setGames(game.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      gap="30px"
      padding={"10px"}
    >
      {isLoading &&
        skeleton.map((skeleton) => <GameCarSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} games={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
