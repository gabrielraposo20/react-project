import { Group, Item } from './styled.tsx'
import { Link } from 'react-router-dom'
export const Menu = () => {
    return(
        <Group>
            <Item>
                <Link to="/">Home</Link>
            </Item>

            <Item>
                <Link to="/about">About</Link>
            </Item>

            <Item>
                <Link to="/BMI">BMI Calculator</Link>
            </Item>

            <Item>
                <Link to="/Colors">Colors</Link>
            </Item>

            <Item>
                <Link to="/Counter">Counter</Link>
            </Item>

            <Item>
                <Link to="/NumberGuess">Number Guess</Link>
            </Item>
        </Group>
    
    )
}
