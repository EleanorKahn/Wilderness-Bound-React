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
    const campsite = useSelector(selectCampsiteById(campsiteId));
    
    //inline callback for useSelector just for awareness that it exists and is done, but not most organized way
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default CampsiteDetailPage;