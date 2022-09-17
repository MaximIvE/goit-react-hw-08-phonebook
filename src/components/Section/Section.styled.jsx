import styled from "styled-components";

export const Wrapper = styled.div`
padding: 12px 12px 4px 12px;
max-width: ${props => {if (props.element === "form") return "20vw"}};
min-width: ${props => {if (props.element === "form") return "160px"}};

    &:first-child{
        max-width: 20vw;
        min-width: 140px;
        flex-basis: 20vw;
        box-shadow: inset 0 -2px 1px rgba(193,193,193,0.1), inset -2px -4px 4px rgba(0,0,0,0.2), 0 2px 1px rgba(193,193,193,0.1), 2px 4px 4px rgba(0,0,0,0.2);
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
    }
    &:last-child{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
        flex-basis: 80vw;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin:  4px 0;
    @media screen and (min-width:480px){
        margin:  28px 0;
    }
`;