// DisplayCard is an example of a presentational component - doesn't really use any logic, just presents
import{ Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

const DisplayCard= ({ item }) => {
    const { image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;