import { StyledTitle, StyledButton, StyledOutput } from './styled.tsx'
import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () =>{
        setCounter(counter + 1);
    }

    return(
        <div>
            <StyledTitle>Counter</StyledTitle>

            <StyledButton type="submit" onClick={handleClick}>Click here!</StyledButton>

            <StyledOutput>{counter} clicks!</StyledOutput>
      
        </div>
    )
}