import { Image, ImageProps } from "@chakra-ui/react";
import bullEyes from "../assets/bulls-eye.webp";
import mehEmoji from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiObj: { [key: number]: ImageProps } = {
    3: { src: bullEyes, alt: "bulls-eye", boxSize: "20px" },
    4: { src: thumpsUp, alt: "thumps-up", boxSize: "20px" },
    5: { src: mehEmoji, alt: "meh", boxSize: "20px" },
  };

  //   const emoji = rating > 75 ? thumpsUp : rating > 50 ? meh : bullsEye;

  return <Image {...emojiObj[rating]} marginY={2} />;
};

export default Emoji;
