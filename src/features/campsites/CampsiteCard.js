import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// goal - create campsitecard component, which will create a card component with the image of a campsite and a CardTitle caption with the name of the campsite

const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite;
    return (
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
    );
}

export default CampsiteCard;
