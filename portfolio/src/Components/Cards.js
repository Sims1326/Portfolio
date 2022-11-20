import { Card } from "react-bootstrap";

function GameLibraryCard({appName, tech}){
    return(
        <Card bg="info" border="dark">
            <Card.Body>
                <Card.Img src="../public/linkedin.png"/>
                <Card.Title>{appName}
                </Card.Title>
                <Card.Subtitle>{tech}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default GameLibraryCard;