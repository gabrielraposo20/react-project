import './styled.tsx';
import { Title, Paragraph, StyledContainer, StyledMC, RestartButton, StyledInput, StyledButton, ButtonContainer, StyledOutput } from './styled.tsx';
import { useState, useEffect } from 'react'; 
import { toast } from 'react-toastify';

export const NumberGuess = () => {
    
    const [userChoice, setUserChoice] = useState<number | ''>(''); 
    const [machineChoice, setMachineChoice] = useState<number | null>(null); 
    const [textColor, setTextColor] = useState<string>('black'); 
    const [displayButton, setDisplayButton] = useState<string>('none');
    
    function NumberGen() {
        const max = 100;
        const min = 1;
        const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setMachineChoice(generatedNumber); 
        return generatedNumber;
    }

    function Start() {
        function UserValidation() {
            const userNumber = Number(userChoice); 

            if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
                toast.error('Invalid Number.');
                return;
            }
            
            if (userNumber === machineChoice) {
                toast.success('You won!');
                setTextColor('green'); 
                setDisplayButton('flex'); 
            } else {
                toast.info('Try again!');
                setTextColor('red'); 
                setDisplayButton('flex'); 
            }
        }

        UserValidation();
    }

    function Restart() {
        setUserChoice('');
        setMachineChoice(NumberGen()); 
        setTextColor('black'); 
        setDisplayButton('none'); 
    }

    useEffect(() => {
        NumberGen(); 
    }, []); 

    return (
        <div>
            <Title>Guess the number!</Title>

            <Paragraph>Guess the chosen number between 1 and 100!</Paragraph>

            <StyledContainer>
                <p>Machine's choice: </p>
                <StyledMC style={{ color: textColor }}>{machineChoice}</StyledMC>

                <br />

                <p>User's choice: </p>
                <StyledInput 
                    type="number" 
                    value={userChoice}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserChoice(Number(e.target.value))} 
                ></StyledInput>
            </StyledContainer>

            <ButtonContainer>
                <StyledButton type="button" onClick={Start}>Guess!</StyledButton>
                <RestartButton style={{ display: displayButton }} type="button" onClick={Restart}>Try again!</RestartButton>
            </ButtonContainer>

            <StyledOutput />
        </div>
    );
}
