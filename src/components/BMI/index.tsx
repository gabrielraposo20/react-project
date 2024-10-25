import { Title, InputContainer, StyledInput, StyledLabel, StyledButton } from './styled.tsx'

import { useState } from 'react';
import { toast } from 'react-toastify';

export const BMI = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);

    const handleValidation = () => {
        if (!weight || !height) {
            toast.error('Both fields are required');
            return false;
        }

        if (isNaN(Number(weight)) || (isNaN(Number(height)))){
            toast.error('Please enter valid numeris values.');
            return false;
        }

        if (Number(weight) <= 0 || Number(height) <= 0){
            toast.error('Weight and height must be positive numbers.');
            return false;
        }

        return true;
    };

    const calculateBMI = () => {
        if (handleValidation()) {
            const heightInMeters = Number(height) / 100;
            const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
            setBmi(bmiValue);
        };
    };

    return(
        <div>
            <Title>BMI Calculator</Title>

            <InputContainer>
            
                <StyledLabel htmlFor="weight">Weight</StyledLabel>
                <StyledInput type="number" id="weight" placeholder="Weight (in kg)" value={weight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}/>

                <StyledLabel htmlFor="height">Height</StyledLabel>
                <StyledInput type="number" id="height" placeholder="Height (in cm)" value={height} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)}/>

                <StyledButton type="submit" onClick={calculateBMI}>Calculate</StyledButton>

            </InputContainer>

            {bmi !== null && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px slid #ccc', borderRadius: '5px', display: 'flex', justifyContent: 'center', fontSize: '2em' }}>
                    <p>Your BMI is: {bmi.toFixed(2)}</p>
                </div>
            )}

        </div>
    )
}