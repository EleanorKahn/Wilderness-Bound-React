import { Col } from 'reacstrap';

const Loading = () => {
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary' />
            <p>Loading...</p>
        </Col>
    );
};

export default Loading;
