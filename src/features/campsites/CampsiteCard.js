import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

// goal - create campsitecard component, which will create a card component with the image of a campsite and a CardTitle caption with the name of the campsite

const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width="100%"
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

export default CampsiteCard;
