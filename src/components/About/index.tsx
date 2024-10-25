import './styled.tsx'
import { Title, Paragraph, List, Element } from './styled.tsx'

export const About = () => {

    return(
        <div>
            <Title>About</Title>
            
            <Paragraph>I created this project to learn and practice a few things:</Paragraph>

            <List>
                <Element>React itself</Element>
                <Element>React Router DOM</Element>
                <Element>TypeScript</Element>
                <Element>Styled Components</Element>
                <Element>Vite</Element>
                <Element>Folder organization</Element>
                <Element>Packages</Element>
                <Element>React Toastify</Element>
                <Element>React UseState</Element>
                <Element>React UseEffect</Element>
            </List>

        </div>
    )
}