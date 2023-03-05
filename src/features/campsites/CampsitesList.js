import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";

//NB - getting an error about unique id. Would something like nanoid help? Investigate

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log("campsites", campsites);
    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col 
                        md="5"
                        className="m-4" 
                        key={CampsiteCard.id}
                    >
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })};
        </Row>
    );
}

export default CampsitesList;