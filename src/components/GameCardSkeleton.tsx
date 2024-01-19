import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <CardBody>
        <Skeleton height="200px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
