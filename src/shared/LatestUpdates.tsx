import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header } from "./Header";

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
        <Header>Latest Updates</Header>
        <EntryDiv>
            <TitleDiv>
                Volunteer Outreach
            </TitleDiv>
            <MetaDiv>
                April 8th 2022
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
                April 2nd 2022
            </MetaDiv>
            <MetaDiv>
            </MetaDiv>
            <ContentDiv>
                We are seeking Ukrainian families who would be interested in settling in our community, either temporarily or longer-term. Wakefield, Quebec and its surroundings are primarily rural areas established along the Gatineau River. The village of Wakefield has several shops and services, including a hospital and English elementary school, but for most job and educational opportunities, families would need to drive to the larger cities of Gatineau, Quebec or Ottawa, Ontario, as public transportation is limited. Our volunteers are here to help with transportation, as well as other settlement needs.
            </ContentDiv>
        </EntryDiv>
    </MainDiv>
}

