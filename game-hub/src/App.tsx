import { Grid, GridItem, Stack } from "@chakra-ui/react";


import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { CgGames } from "react-icons/cg";



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
          Hey2
        </GridItem>
      </Stack>
      <GridItem area={"main"} bg={"dodgerblue"}>
        <GameGrid id={""} title={""} />
      </GridItem>
    </Grid>
  );
};

export default App;
