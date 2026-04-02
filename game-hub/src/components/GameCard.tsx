import { Card, CardBody, Heading, Image } from "@chakra-ui/react"

import heroImage from "../assets/hero.png"

const GameCard = () => {
  return (
    <Card.Root padding={"10px"}>
        <Image src={heroImage} boxSize={"100px"}/>
        <CardBody>
            <Heading>Game 1</Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard