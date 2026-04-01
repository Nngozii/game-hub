import { Grid, GridItem, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Hey1
      </GridItem>
      <Stack hideBelow="lg"> {/*This is used for responsiveness. To hide thr aside bar below large screens*/}
        <GridItem area={"aside"} bg={"gold"}>
          Hey2
        </GridItem>
      </Stack>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Hey3
      </GridItem>
    </Grid>
  );
};

export default App;
