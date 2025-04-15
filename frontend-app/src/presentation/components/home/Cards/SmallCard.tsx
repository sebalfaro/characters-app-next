import { SmallCardProps } from "@/presentation/types";
import { Card } from "react-character-card";


export const SmallCard = ({ image, name, species, isFavCharacter, setFavs }: SmallCardProps) => {
  return (
    <Card size="s">
      <Card.Top size="s">
        <Card.FavChip isFavCharacter={isFavCharacter} onClickHandler={setFavs} position="right" />
        <Card.Media imgPath={image} alt="character image" />
      </Card.Top>
      <Card.Body size="s">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{species}</Card.Text>
      </Card.Body>
    </Card>
  );
};
