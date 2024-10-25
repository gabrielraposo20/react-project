import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-size: 2.5em;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    margin: 30px 0px;
`;

export const StyledButton = styled.button`
    font-size: 1.0em;
    padding: 15px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 55px;
    border-radius: 50%;
    border: 1px solid #333;
    box-shadow: 1px 1px 1px 0.33;
    margin-top: 50px;
    font-weight: bolder;
`;

export const StyledContainer = styled.div`
    background-color: beige;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;