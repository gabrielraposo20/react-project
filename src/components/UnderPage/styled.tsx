import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; 
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #272424;
    color: #adadad;
    padding: 1px;
    gap: 2px;
    margin-top: 200px;
    border: 1px solid black;
`;

export const Paragraph = styled.p`
    font-size: 1em;
    padding-left: 10px;
`;