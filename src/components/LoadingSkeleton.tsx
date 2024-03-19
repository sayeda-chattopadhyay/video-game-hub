import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return (
    <Card height="300px" width="400px">
      <CardBody>
        <Skeleton />
      </CardBody>
      <SkeletonText />
    </Card>
  );
};

export default LoadingSkeleton;
