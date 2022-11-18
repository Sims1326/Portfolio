import { Card, Button, Row, Col } from "react-bootstrap";

function GameLibraryCard(props){
    return(
        <Card bg="info" border="dark">
            <Card.Body>
                <Card.Img src="../public/linkedin.png"/>
                <Card.Title>{props.appName}
                </Card.Title>
                <Card.Subtitle>{props.tech}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default GameLibraryCard;