import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../../../interface";
import { DonateButtons } from "../../DonateButtons";
import FacebookIcon from '../../../images/facebook.png';
import EmailIcon from '../../../images/email.png';
import BrunetLogo from '../../../images/brunet-logo.png';
import { Button } from "../../Button";
const MainDiv = styled.div<WithTheme>(({ theme }) => `
   background-color: ${theme.darkColor};
   padding: 80px 40px;
   color: ${theme.lightFont};
   text-align: left;
   @media (min-width:480px) {
       display: flex;
       flex-direction: row;
       align-items: flex-start;
       justify-content: space-between;
   }
`);
const Section = styled.div<WithTheme>(() => `
    flex: 0;
    margin-bottom: 20px;
    @media (min-width:480px) {
        margin-bottom: 0px;
    }
`);

const Item = styled.div<WithTheme>(() => `
    padding: 10px;
    display: flex;
    flex-direction:row;
    justify-content: left;
    align-items: center;
`);

const Sponsors = styled.div<WithTheme>(() => `
    
`);

const Sponsor = styled.div<WithTheme>(() => `
    display: block;
    margin-bottom:20px;
`);

const Icon = styled.img<WithTheme>(() => `
    margin-right: 10px;
`);

const Link = styled.a<WithTheme>(({ theme }) => `
    color: ${theme.lightColor};
`);

const BecomeASponsorLink = styled.a<WithTheme>(({ theme }) => `
    padding: 20px;
    border-style: dashed;
    border-color: ${theme.lightColor}
    border-width: 5px;
    color: ${theme.lightColor};
    color: ${theme.lightFont};
    text-align: center;
    display: block;
    font-size:0.85rem;
`);

const Heading = styled.h3<WithTheme>(({ theme }) => `
    font-size: 1.25rem;
    color: ${theme.lightColor};
    margin-bottom: 20px;
`);
export const Footer: React.FC = () => {
    return <MainDiv>
        <Section>
            <Heading>Thanks to our Sponsors!</Heading>
            <Sponsors>
                <Sponsor>
                    <a href="https://www.brunet.ca/localisateur-succursale/wakefield-895-chemin-riverside-j0x-3g0/5110/"><img width="420" src={BrunetLogo} /></a>
                </Sponsor>
                <Sponsor>
                    <BecomeASponsorLink href="mailto:wakefieldforrefugees@gmail.com">
                        Add your business here! Sponsor WFR
                    </BecomeASponsorLink>
                </Sponsor>
            </Sponsors>
        </Section>
        <Section>
        <Heading>Connect with Us</Heading>
            <Item><Icon src={EmailIcon} /><Link href="mailto:wakefieldforrefugees@gmail.com">wakefieldforrefugees@gmail.com</Link></Item>
            <Item><Icon src={FacebookIcon} /><Link href="https://facebook.com/groups/wakefield-for-refugees">Join our Facebook group</Link></Item>
        </Section>
        <Section>
            <Button size="large" href="/donate/">Donate Now</Button>
        </Section>
    </MainDiv>
}