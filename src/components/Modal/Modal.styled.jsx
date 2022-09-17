import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalContetn = styled.div`

    padding: 8px;
    border-radius: 3px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px, 1px, 3px, 0px rgba(0, 0, 0, 0.12);
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 48px);
    
    background-color: #fff;
    @media (min-width:480px){
        padding: 12px;
  }
    
`;                                                                                                                                                                                  
