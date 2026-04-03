import { Grid, GridItem, Stack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "../hooks/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Stack hideBelow="lg">
        {" "}
        {/*This is used for responsiveness. To hide thr aside bar below large screens*/}
        <GridItem area={"aside"} bg={"gold"}>
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area={"main"}>
        <GameGrid id={""} title={""} thumbnail="" platform="" genre="" /> {/*heaven knows how I moved my way around this one*/}
      </GridItem>
    </Grid>
  );
};

export default App;
