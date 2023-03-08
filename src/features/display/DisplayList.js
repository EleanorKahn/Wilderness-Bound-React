import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion} from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";

const DisplayList = () => {
    const featuredItems = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    console.log("display items", featuredItems);

    return (
        <Row>
            {featuredItems.map((item, idx) => {
                return (
                    item && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={item}></AnimatedDisplayCard>
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;