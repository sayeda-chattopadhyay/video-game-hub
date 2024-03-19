import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImg from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading && !error) return <Spinner size="lg" />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="10px">
          <HStack>
            <Image
              src={getCroppedImg(genre.image_background)}
              alt={genre.name}
              boxSize="40px"
              borderRadius="4px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
