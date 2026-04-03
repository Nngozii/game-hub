import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCarSkeleton = () => {
  return (
    <Card.Root width={"250px"} padding={"10px"} borderRadius={"20px"}>
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText noOfLines={2} />
        </CardBody>
    </Card.Root>
  )
}

export default GameCarSkeleton