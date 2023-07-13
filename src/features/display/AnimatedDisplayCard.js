// DisplayCard is an example of a presentational component - doesn't really use any logic, just presents
import { useState, useEffect } from 'react';
import{ Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard= ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
        //empty array signifies this effect should only run on first mount
    }, []);

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;