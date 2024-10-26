import { Group, Item } from './styled.tsx'
import { Link } from 'react-router-dom'
export const Menu = () => {
    return(
        <Group>
            <Item>
                <Link to="/react-project/">Home</Link>
            </Item>

            <Item>
                <Link to="/react-project/About">About</Link>
            </Item>

            <Item>
                <Link to="/react-project/BMI">BMI Calculator</Link>
            </Item>

            <Item>
                <Link to="/react-project/Colors">Colors</Link>
            </Item>

            <Item>
                <Link to="/react-project/Counter">Counter</Link>
            </Item>

            <Item>
                <Link to="/react-project/NumberGuess">Number Guess</Link>
            </Item>
        </Group>
    
    )
}
