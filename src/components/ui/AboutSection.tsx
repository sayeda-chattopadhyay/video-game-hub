import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Link,
  Icon,
  Divider,
  VStack,
  Badge,
  Image,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsEnvelope, BsGlobe } from "react-icons/bs";
import avatar from "../../assets/pic.jpeg";

interface ContactLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const contacts: ContactLink[] = [
  {
    label: "Portfolio",
    href: "https://sayedachattopadhyay.com/",
    icon: BsGlobe,
  },
  {
    label: "Email",
    href: "mailto:sayeda.b@email.com",
    icon: BsEnvelope,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sayedac/",
    icon: BsLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/sayeda-chattopadhyay",
    icon: BsGithub,
  },
];

const AboutSection = () => (
  <Box
    as="section"
    borderTopWidth="1px"
    borderColor="gray.700"
    bg="gray.800"
    px={{ base: 6, md: 16 }}
    py={{ base: 12, md: 16 }}
  >
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 10, lg: 16 }}
      maxW="1100px"
      mx="auto"
      align={{ lg: "flex-start" }}
    >
      {/* ── About text ──────────────────────────────── */}
      <VStack align="flex-start" spacing={5} flex={1}>
        {/* Profile picture + badge row */}
        <HStack spacing={4} align="center">
          <Image
            src={avatar}
            alt="Developer photo"
            boxSize="80px"
            borderRadius="full"
            objectFit="cover"
            borderWidth="3px"
            borderStyle="solid"
            borderColor="purple.500"
            flexShrink={0}
          />
          <Badge
            colorScheme="purple"
            fontSize="xs"
            letterSpacing="wide"
            px={3}
            py={1}
            borderRadius="full"
          >
            About the Developer
          </Badge>
        </HStack>

        <Heading size="lg" lineHeight="shorter">
          Building things I love to use.
        </Heading>

        <Text color="gray.400" lineHeight="tall">
          Hi, I am Sayeda, a passionate full-stack developer with a deep love
          for interactive experiences games included. I built Video Game Hub as
          a hands-on project to sharpen my skills in React, TypeScript, and
          modern data- fetching patterns while creating something genuinely
          useful.
        </Text>

        <Text color="gray.400" lineHeight="tall">
          This project is an opportunity to explore real-world API integration,
          scalable component architecture, and thoughtful UI design. Every
          feature here reflects something I am actively learning and refining. I
          am always eager to pick up new technologies, best practices, and
          perspectives because great software is never truly finished.
        </Text>

        <Divider borderColor="gray.700" />

        <Text color="gray.300" fontWeight="semibold">
          Have ideas to improve this site, or interested in collaborating?
        </Text>
        <Text color="gray.500" fontSize="sm">
          I am always open to feedback, contributions, and conversations with
          fellow developers. Whether you spot something to fix or want to build
          something together, do not hesitate to reach out.
        </Text>
      </VStack>

      {/* ── Contact links ───────────────────────────── */}
      <VStack
        align="flex-start"
        spacing={4}
        flexShrink={0}
        minW={{ lg: "220px" }}
        pt={{ base: 0, lg: 1 }}
      >
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="gray.500"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          Get in touch
        </Text>

        {contacts.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            isExternal={!href.startsWith("mailto")}
            _hover={{ textDecoration: "none" }}
            w="100%"
          >
            <HStack
              spacing={3}
              px={4}
              py={3}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="gray.700"
              _hover={{
                borderColor: "blue.500",
                bg: "gray.750",
                color: "blue.300",
              }}
              transition="all 0.2s"
              color="gray.300"
            >
              <Icon as={icon} boxSize={4} />
              <Text fontSize="sm" fontWeight="medium">
                {label}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
    </Flex>
  </Box>
);

export default AboutSection;
