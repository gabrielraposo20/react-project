import { Title, Text, Iframe, IframeContainer } from './styled';

export const Home = () => {
    return(
        <div>
            <Title>Home Page</Title>

            <Text>Theres nothing here, so you should watch this:🔥🔥🔥</Text>
            <IframeContainer>
                <Iframe width="540" height="380" src="https://www.youtube.com/embed/VgDgWzBL7s4" title="Rock lee vs Gaara - Linkin park" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>
            </IframeContainer>
        </div>
    )
}