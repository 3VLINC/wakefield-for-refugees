import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import Town from "../images/town2.jpg";
import { Header } from "./Header";
import { Button } from "./Button";
import { Donate } from "./Donate";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: #FFF;
    background: url(${Town}) center center no-repeat;
    padding:40px;
`);

const AboutArea = styled.div<WithTheme>(({ theme }) => `
    flex-basis: 100%;
    @media (min-width: 720px) {
        max-width: 480px;

    }
    background-color: ${theme.primaryColor};
    padding: 40px;
    
`);

const ButtonsArea = styled.div<WithTheme>(({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;  
`);

const Button2 = styled(Button)`
    height: 300px;
    color: green;
`;



export const AboutUs: React.FC = () => {

    return <MainDiv>
        <AboutArea id="about-us">
            <Header color="light">About Us</Header>
            <p>
                Wakefield for Refugees is a group of community members based in and around Wakefield (Québec) Canada involved in sponsoring and resettling refugees to Canada.</p>
            <p>The group was established in 2015 to respond to the Syrian refugee crisis. Thanks to the tremendous support from our local community, we successfully sponsored three Syrian families under the Canadian government's Private Sponsorship Program, and supported them during their first full year in Canada. Those families are now permanently settled in the region, working and going to school.</p>
            <p>Given the devastating refugee crisis in Ukraine, our group has reconvened to see how we can help. Our aim is to support Ukrainian families with a soft landing upon their arrival in our community, by helping them to find housing, work, childcare, and access to healthcare, among other needs.

            </p>
            <ButtonsArea>
                <Button2 size="large" href="https://docs.google.com/forms/d/1HAqQgfiklH2XXcCcfyLRsSSveesZKCKUeUevVlqgkeo">Volunteer</Button2>
                <Donate />
            </ButtonsArea>
        </AboutArea>
    </MainDiv>
}