import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header1 } from "./Header1";
import OlhaVitalii from '../images/family-olha-vitalii.jpg';
import VladLarisa from '../images/family-vlad-larisa.jpg';
import { FeatureImg } from "./FeatureImg";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

const EntryDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    margin-bottom: 80px;
    &:last-child {
        margin-bottom: 0px;
    }
`);


const TitleDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    font-size: 1.5rem;
    margin-bottom: 10px;
    `);

const MetaDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    font-size:0.85rem;
    margin-bottom: 20px;
`);

const ContentDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    line-height:1.5rem;
`);


export const LatestUpdates: React.FC = () => {

    return <MainDiv id="latest-updates">
        <Header1>Latest Updates</Header1>
        <EntryDiv>
            <TitleDiv>
                Wakefield Grannies perennials sale in support of Ukraine refugees
            </TitleDiv>
            <MetaDiv>
                Posted June 21 2022
            </MetaDiv>
            <ContentDiv>
                The Wakefield Grannies are back with a new selection of perennial plants. 50% of the plant sales will be given to Wakefield For Refugees. You can purchase your plants at the <a href="https://goo.gl/maps/FjMcK2iNiErb2gqH7">Magasin Général de La Pêche</a> on Thursday June 23rd from 10 to 4
 or Friday June 24th from 10 to 4. Cash preferred. Thank you to our faithful customers and to David and Becky for letting us invade their parking lot and for making the best breakfast and lunch sandwiches. Happy gardening!
            </ContentDiv>
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                New family in our community: Meet Vlad and Larisa
            </TitleDiv>
            <MetaDiv>
                Posted June 21 2022
            </MetaDiv>
            <ContentDiv>
            Vlad Ermilov and his mom, Larisa, arrived in May from Kharkiv, the second-largest city in Ukraine. Before the war, Larisa worked as a nurse and Vlad was completing his Master’s in economics. Now, they are learning to bake bread and make donuts as Wakefield Bakery’s newest staff. Wakefield is certainly an adjustment from city life but they are starting to feel more at home, with lots of support from two local host families and our volunteers. They say they have been enjoying Wakefield’s clean air, wildlife, good roads (!) and friendly people. If you see them around, give them a big hearty Wakefield welcome. 
            </ContentDiv>
            <FeatureImg src={VladLarisa} />
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                New family in our community: Olha and Vitalii
            </TitleDiv>
            <MetaDiv>
                Posted June 21 2022
            </MetaDiv>
            <ContentDiv>
                Another new Ukrainian family in the Hills! Vitalii and his mother Olha Borsyiuk, from the city of Novovolynsk, have moved in with a host family in Chelsea. Olha – a kindergarten teacher for the past 30 years – has been avidly gardening and enjoying fresh eggs from her host’s 5 chickens! Vitalii continues his studies online to complete his degree in Applied Computer Science. The biggest advantage of Chelsea, they said, has been the incredible support from their host family and the local community. Host Peggy Campbell, says the experience has been very lovely for her and her husband, David Woods. She enjoys having Olha’s help taming the garden, Vitalii’s skill with their computers, and exchanging culinary dishes.
            </ContentDiv>
            <FeatureImg src={OlhaVitalii} />
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                Use your Air Miles cash to donate an IGA or Jean Coutu gift card to a landed Ukrainian family.
            </TitleDiv>
            <MetaDiv>
                Posted June 7 2022
            </MetaDiv>
            <ContentDiv>
                You can now donate an IGA or Jean Coutu gift card purchased with your spare Air Miles cash to a Ukranian family. We've got step by step instructions you can follow on our <a href="/donate">donate</a> page.
            </ContentDiv>
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                MRC des Collines to provide free criminal background checks to families hosting Ukrainian refugees
            </TitleDiv>
            <MetaDiv>
                Posted May 31 2022
            </MetaDiv>
            <ContentDiv>
                Any MRC des Collines resident can get the criminal records check free of charge. Address your request to <a href="mailto:verificationspolicieres@mrcdescollines.com">MRC des Collines-de-l’Outaouais</a>, 216 Chemin Old Chelsea, Chelsea, Quebec J9B 1J4 and indicate that you are planning to be a host family for Ukrainian displaced people in this region. Download our <a href="https://docs.google.com/document/d/1bpOpFW9zpKBU-JPb8ppUhnAukh4WdX_Wxkoij2M57Lo/edit?usp=sharing">sample form letter</a> here.
            </ContentDiv>
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                "My Thoughts are Silent" presented by Cinema Wakefield, April 24th
            </TitleDiv>
            <MetaDiv>
                Posted April 15th 2022
            </MetaDiv>
            <ContentDiv>
                Cinema Wakefield will be screening "My Thoughts Are Silent" on April 24th at 4pm, a Ukrainian comedy-drama about an awkward young sound engineer attempting to record the song of a rare mallard as a means of securing a job in Canada. All proceeds are going to support The Canada Ukraine Foundation &amp; Wakefield for Refugees. Tickets are $13 in advance or $15 at the door. <a href="https://centrewakefieldlapeche.ca/event-4770399">Get your tickets today</a>



            </ContentDiv>
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                Volunteer Outreach
            </TitleDiv>
            <MetaDiv>
                Posted April 8th 2022
            </MetaDiv>
            <ContentDiv>
                We are reaching out to our community members to build a roster of volunteers who can help provide Ukrainians with a soft landing when they arrive in our community. We are looking for people who can provide temporary and long-term housing, childcare, transportation, translation, among other needs. If you are able to help please <a href="https://forms.gle/E5u9ddp5PjyCBkFAA">complete our volunteer form</a>.
            </ContentDiv>
        </EntryDiv>
        <EntryDiv>
            <TitleDiv>
                Ukrainian Outreach
            </TitleDiv>
            <MetaDiv>
                Posted April 2nd 2022
            </MetaDiv>
            <MetaDiv>
            </MetaDiv>
            <ContentDiv>
                We are seeking Ukrainian families who would be interested in settling in our community, either temporarily or longer-term. Wakefield, Quebec and its surroundings are primarily rural areas established along the Gatineau River. The village of Wakefield has several shops and services, including a hospital and English elementary school, but for most job and educational opportunities, families would need to drive to the larger cities of Gatineau, Quebec or Ottawa, Ontario, as public transportation is limited. Our volunteers are here to help with transportation, as well as other settlement needs.
            </ContentDiv>
        </EntryDiv>
    </MainDiv>
}

