import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => (
  <Card borderRadius={10} overflow="hidden">
    <Skeleton height="200px" />
    <CardBody>
      <SkeletonText noOfLines={3} spacing={3} mt={2} />
    </CardBody>
  </Card>
);

export default GameCardSkeleton;
