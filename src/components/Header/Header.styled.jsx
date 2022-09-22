import styled from 'styled-components';

export const HeaderStyled = styled.div`
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

