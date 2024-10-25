import styled from 'styled-components';

export const Group = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: #000000;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
        color: white;
        text-decoration: none;
        font-weight: bolder;
    }
`;