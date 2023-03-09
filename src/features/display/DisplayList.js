import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion} from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    console.log("display items", items);

    return (
        <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    featuredItem && (
                        <Col md className="m-1" key={idx}>
                            <AnimatedDisplayCard item={featuredItem}></AnimatedDisplayCard>
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;