import { useEffect, useState } from "react";
import api from "../services/api-client";

import type { Game } from "../../hooks/GameGrid";
import { List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<Game[]>("/games")
      .then((response) => {
        /* Here, uniqueGenre exists because, when I fetch the genres, it list all the genre for each game which means
duplicates. uniqueGenre uses the Set data type (new Set), like an array but it ignores duplicates. However, it doesn't
return an array, it returns a string, which is why ...(spread operator) is used to spread them into an
array in order to be able to map. The :Game is just a typescript thing needed.
 */
        const uniqueGenre = [
          ...new Set(response.data.map((game: Game) => game.genre)),
        ];
        setGenres(uniqueGenre);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <List.Root listStyle="none">
      {genres.map((data) => (
        <ListItem key={data} paddingY={"3px"}>
          <Text>{data}</Text>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
