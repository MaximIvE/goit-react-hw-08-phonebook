import styled from 'styled-components';

export const HeaderStyled = styled.div`
position: relative;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    justify-content: ${props => props.isLogin ? "space-between": "flex-end"};
    align-items: baseline;
    width: 100%;
    
`;

export const WrapperUserMenu = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Notific = styled.p`
position: absolute;
font-size: 0.7em;
font-style: italic;
right: 56px;
right: calc( );
top: 56px;
color: rgba(255,255,255,0.9);

`;

