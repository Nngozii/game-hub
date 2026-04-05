import { Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "../hooks/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

const App = () => {
  /* Lifting the select game by genre state or function to this App file(Parent) because
  the GameGrid component and the GenreList component want to share it(the state)
*/
const [selectedGenre, setSelectedGenre] = useState("")

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: "180px 1fr"
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <Stack hideBelow="lg">
        {" "}
        {/*This is used for responsiveness. To hide thr aside bar below large screens*/}
        <GridItem area={"aside"} paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Stack>

      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} /> {/*heaven knows how I moved my way around this one*/}
      </GridItem>
    </Grid>
  );
};

export default App;
