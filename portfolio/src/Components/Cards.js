import { Card } from "react-bootstrap";

function GameLibraryCard({ appName, tech, appImg, imgAlt }) {
  return (
    <Card as="a" href="/">
      <Card.Img variant="top" src={appImg} alt={imgAlt} />
      <Card.Body>
        <Card.Title>{appName}</Card.Title>
        <Card.Subtitle>{tech}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default GameLibraryCard;
