import { Title, Wrapper } from './Section.styled';
import PropTypes from 'prop-types';


export default function Section({element, children}){
    return(
        <Wrapper element={element}>
            <Title>{children[0]}</Title>
            {children[1]}
            {children[2]}
        </Wrapper>
    )
}

Section.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}