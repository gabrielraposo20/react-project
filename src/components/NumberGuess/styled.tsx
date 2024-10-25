import styled from 'styled-components';

export const Title = styled.h1`
    justify-content: center;
    display: flex;
    font-size: 3.4em ;
    color: black;
    font-weight: bolder;
    margin-top: 20px;
`;

export const Paragraph = styled.p`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StyledContainer = styled.div`
    display: flex;
    margin: 40px 10px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    
    p{
        font-weight: bolder;
        margin: 0px 10px;
    };
`;

export const StyledMC = styled.div`
    background-color: black;
    color: black;
    padding-left: 5px;
    border: 1px 5px solid black;
   `;

export const RestartButton = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 1px solid #858585;
    border-radius: 2px;
    width: 100px;
    height: 30px;

`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
    width: 140px;
    height: 40px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    align-items: center;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 1px solid #858585;
    border-radius: 2px;
    width: 100px;
    height: 30px;
    margin-bottom: 10px;
`;

export const StyledOutput = styled.div`
    font-size: 1.2em;
    font-weight: bolder;
    color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
`;
