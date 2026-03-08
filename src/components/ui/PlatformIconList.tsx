import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../../types/platform";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  mac: FaApple,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => (
  <HStack marginY={2}>
    {platforms.map((platform) =>
      iconMap[platform.slug] ? (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          color="gray.500"
        />
      ) : null
    )}
  </HStack>
);

export default PlatformIconList;
