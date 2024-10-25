import { StyledTitle, StyledButton, StyledContainer} from './styled.tsx'
import { useState } from 'react';

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

export const Colors = () => {

    const [pageColor, setPageColor] = useState(getRandomColor())
    const [titleColor, setTitleColor] = useState(getRandomColor());
    const [buttonBgColor, setButtonBgColor] = useState(getRandomColor());
    const [buttonTextColor, setButtonTextColor] = useState(getRandomColor());

    const changePageColors = () => {
        setPageColor(getRandomColor());
        setTitleColor(getRandomColor());
    };

    const changeButtonColors = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setButtonBgColor(getRandomColor());
        setButtonTextColor(getRandomColor());
    };

    return(
        <StyledContainer onClick={changePageColors} style={{ backgroundColor: pageColor}}>
            
            <StyledTitle style={{ color: titleColor  }}>Colors!!</StyledTitle>

            <StyledButton onClick={changeButtonColors}
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor}}>Click!</StyledButton>

        </StyledContainer>
    )
}