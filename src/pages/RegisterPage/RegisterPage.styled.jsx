import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Error = styled.p`
    opacity:  ${props => { console.log(props); return props.visible}};
    display: inline-block;
    padding: 4px 8px;
    color: rgba(255, 255, 255, 0.96);
    font-weight: 500;
    background-color: rgba(255, 0, 0, 0.6);
    border-radius: 2px;
    
  transition-property: opacity;
  transition-duration: 250ms;

  transition-timing-function: cubic-bezier(0, 0, 0.1, 1);
`;