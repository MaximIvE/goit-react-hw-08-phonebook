import styled from 'styled-components';

export const Spinner = styled.div`
  max-height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Oval = styled.span`

  width: ${props => props.height}${"px"};
  height: ${props => props.height}${"px"};
  border: ${props => {return (+props.height/8)}}${"px"} solid ${props=> props.secondaryColor};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.height}${"px"};
    height: ${props => props.height}${"px"};
    border-radius: 50%;
    border: ${props => {return (props.height/8)}}${"px"} solid;
    border-color: ${props=> props.color} transparent;
  };

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
  }
}
`;
