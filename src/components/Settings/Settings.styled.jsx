import styled from "styled-components";

export const Wrapper = styled.div`
justify-content: flex-end;
text-align: end;
padding: 4px;
font-weight: 500;
display: flex;
height: 36px;
align-items: center;
color: rgba(255,255,255, 0.6);
text-shadow: 0px 0px 1px black, 0 0 0.4em black;

@media screen and (min-width:480px){
    right: 8px;
    top: 0;
    margin-top: 4px;
}
`;

export const WrapperLoader = styled.div`
margin:8px 4px;
padding:2px;
height: 30px;
width: 30px;
display: flex;
justify-content: center;
`;