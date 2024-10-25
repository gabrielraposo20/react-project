import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.6em;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;

`;


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin: 20px auto; 
`;

export const StyledLabel = styled.label`
    font-size: 14px;
    color: #333;
    margin-bottom: 1px;
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #007bff; 
    }
`;

export const StyledButton = styled.button`
    margin-top: 30px;
    height: 30px;
    background-color: #e4e3e3;
    border: 1px solid grey;
`;