import { useEffect, useState } from "react";
import api from "../services/api-client";

import type { Game } from "../../hooks/GameGrid";
import { List, ListItem, Spinner, Button, Text } from "@chakra-ui/react";


const GenreList = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true)
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
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    {error && <Text paddingY={"20px"}>Error Loading Genres</Text>}
    <List.Root listStyle="none">
        {isLoading && <Spinner animationDuration="0.8s" />}
      {genres.map((data) => (
        <ListItem
          key={data}
          paddingY={"3px"}
          paddingX="3px"
          borderRadius="8px"
          cursor="pointer"
          fontWeight="medium"
          transition="all 0.2s"
          _hover={{
            bg: "whiteAlpha.200",
            paddingLeft: "18px",
          }}
        >
          <Button variant={"ghost"} onClick={() => {console.log("CLicked", data)}}>{data}</Button>
        </ListItem>
      ))}
    </List.Root>
    </>
  );
};

export default GenreList;
