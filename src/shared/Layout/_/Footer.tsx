import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../../../interface";
import { DonateButtons } from "../../DonateButtons";
import FacebookIcon from '../../../images/facebook.png';
import EmailIcon from '../../../images/email.png';
import { Button } from "../../Button";
const MainDiv = styled.div<WithTheme>(({ theme }) => `
   background-color: ${theme.darkColor};
   padding: 80px 40px;
   color: ${theme.lightFont};
   text-align: left;
   @media (min-width:480px) {
       display: flex;
       flex-direction: row;
       align-items: center;
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

const Icon = styled.img<WithTheme>(() => `
    margin-right: 10px;
`);

const Link = styled.a<WithTheme>(({ theme }) => `
    color: ${theme.lightColor};
`);

const Heading = styled.h3<WithTheme>(({ theme }) => `
    font-size: 1.25rem;
    color: ${theme.lightColor};
    margin-bottom: 20px;
`);
export const Footer: React.FC = () => {
    return <MainDiv>
        <Section>

            <Item><Icon src={EmailIcon} /><Link href="mailto:wakefieldforrefugees@gmail.com">wakefieldforrefugees@gmail.com</Link></Item>
            <Item><Icon src={FacebookIcon} /><Link href="https://facebook.com/groups/wakefield-for-refugees">Join our Facebook group</Link></Item>
        </Section>
        <Section>
            <Button size="large" href="/donate/">Donate Now</Button>
        </Section>
    </MainDiv>
}