import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from '../features/comments/CommentsList';
import SubHeader from "../components/SubHeader";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CampsiteDetailPage = () => {

    //should contain an integer that corresponds to a campsite object's id property
    const { campsiteId } = useParams();
    console.log(campsiteId);
    const campsite = useSelector(selectCampsiteById(campsiteId));
    
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>
                <CampsiteDetail campsite={campsite} />                  
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;