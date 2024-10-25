import { Title, Text, Iframe, IframeContainer } from './styled';

export const Home = () => {
    return(
        <div>
            <Title>Landing Page</Title>

            <Text>Nothing much to do here, so watch this video or try something on the menu</Text>
            
            <IframeContainer>
                <Iframe width="540" height="380" src="https://www.youtube.com/embed/neV3EPgvZ3g?si=zUh1MdUFcPF0rI1C" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></Iframe>
            </IframeContainer>
        </div>
    )
}