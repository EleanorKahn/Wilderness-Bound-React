import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion} from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnerSlice";

const DisplayList = () => {
    const featuredItems = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {featuredItems.map((item, idx) => {
                return (
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item}></DisplayCard>
                    </Col>
                )
            })}
        </Row>
    );
};

export default DisplayList;