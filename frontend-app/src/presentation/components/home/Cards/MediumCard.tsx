import { MediumLargeCardProps } from "@/presentation/types";
import { Card } from "react-character-card";

export const MediumCard = ({
  image,
  name,
  species,
  status,
  location,
  episode,
  setFavs,
  isFavCharacter,
}: MediumLargeCardProps) => {
  return (
    <Card size="m">
      <Card.Top size="m">
        <Card.FavChip
          isFavCharacter={isFavCharacter}
          onClickHandler={setFavs}
          position="left"
        />
        <Card.Media imgPath={image} alt="character image" />
      </Card.Top>
      <Card.Body size="m">
        <Card.Heading>
          <Card.Column>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{species}</Card.Text>
          </Card.Column>
          <Card.Column>
            <Card.Chip text={status} status="active" />
          </Card.Column>
        </Card.Heading>
        <Card.Box>
          <Card.Column>
            <Card.Bold>Last known location</Card.Bold>
            <Card.Text>{location.name}</Card.Text>
          </Card.Column>
          <Card.Column>
            <Card.Bold>First seen in</Card.Bold>
            <Card.Text>{episode[0]}</Card.Text>
          </Card.Column>
        </Card.Box>
      </Card.Body>
    </Card>
  );
};
