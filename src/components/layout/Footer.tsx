import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box
    as="footer"
    borderTopWidth="1px"
    borderColor="gray.700"
    py={6}
    px={{ base: 4, md: 8 }}
    mt="auto"
  >
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      gap={3}
    >
      <Text color="gray.500" fontSize="sm">
        © {new Date().getFullYear()} Video Game Hub. All rights reserved.
      </Text>
      <Link
        href="https://rawg.io/apidocs"
        isExternal
        color="gray.500"
        fontSize="sm"
        _hover={{ color: "blue.400" }}
      >
        Powered by RAWG API
      </Link>
    </Flex>
  </Box>
);

export default Footer;
