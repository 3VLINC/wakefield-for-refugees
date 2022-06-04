import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header1 } from "./Header1";

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

