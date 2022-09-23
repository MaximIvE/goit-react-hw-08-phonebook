import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Error = styled.p`
    display: inline-block;
    padding: 4px;
    color: rgba(255, 255, 255, 0.96);
    font-weight: 500;
    background-color: rgba(255, 0, 0, 0.6);
    
  /* transition-property: background-color; */
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0, 0.1, 1);
`;