import { Spinner, Oval } from './Loader.styled';
import PropTypes from 'prop-types';

export default function  Loader({height=40}){
    return(
        <Spinner>
            <Oval
            height = {height}
            secondaryColor = "#f1f1f1"
            color = '#393c468e'
            />
        </Spinner>
    )
};

Loader.propTypes={
    height: PropTypes.number,
};
