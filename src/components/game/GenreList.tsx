import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import { Genre } from "../../types/genre";
import getCroppedImg from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner size="lg" />;
  if (error) return null;

  return (
    <>
      <Heading fontSize="xl" mb={4}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                src={getCroppedImg(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius="4px"
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="md"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  selectedGenre?.id === genre.id ? "bold" : "normal"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
