import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

//NB - getting an error about unique id. Would something like nanoid help? Investigate

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log("campsites", campsites);

    // sometimes useSelector's callback is defined inline, vs in the slice, so good to just be aware of it
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col 
                        md="5"
                        className="m-4" 
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })};
        </Row>
    );
}

export default CampsitesList;