import { Image, ImageProps } from "@chakra-ui/react";
import bullEyes from "../../assets/bulls-eye.webp";
import mehEmoji from "../../assets/meh.webp";
import thumpsUp from "../../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: bullEyes, alt: "meh", boxSize: "20px" },
  4: { src: thumpsUp, alt: "recommended", boxSize: "20px" },
  5: { src: mehEmoji, alt: "exceptional", boxSize: "20px" },
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginY={2} />;
};

export default Emoji;
