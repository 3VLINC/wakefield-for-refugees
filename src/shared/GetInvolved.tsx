import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Button } from "./Button";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const GetInvolved: React.FC = () => {

    return <MainDiv id="get-involved">
        <Header1>Get Involved</Header1>
        <p>We are always looking to grow our team of volunteers and there are many ways to get involved. For more information about how you can get involved reach out to us at <a href="mailto:wakefieldforrefugees@gmail.com">wakefieldforrefugees@gmail.com</a></p>
        <Header2>Join our core group</Header2>
        <p>The core group sets the long-term strategy of the organization and mobilizes around particular projects. Members belong to one or more subcommittees that tackle things such as fundraising, communications or basic needs. </p>
        <div style={{ width: 250 }}><Button href="https://forms.gle/dV8wi4WdEPg23JcK8">Core Group Signup Form</Button></div>
        <Header2>Hosting</Header2>
        <p>Do you have space in your home that could be used to provide a soft landing for a family? Hosting is a big commitment that isn't right for everyone, but it is a great way to have a big impact.</p>
        <div style={{ width: 250 }}><Button href="https://forms.gle/cUmUYG6M7Jzehwfq5">Hosting Signup Form</Button></div>
        <Header2>Point Person</Header2>
        <p>When families arrive they need help navigating their new surroundings. Point persons act as a family's single point of contact for help. Whether it be registering children for school, navigating public transportation or finding work, point persons laise with our larger group of volunteers
        to connect families with the services and information they need.</p>
        <div style={{ width: 250 }}><Button href="https://forms.gle/6LD7Bnsq3LMUxwXJ8">Point Person Signup Form</Button></div>
        <Header2>Driver</Header2>
        <p>As newcomers to our rural community, families often need help getting around. Whether it is a trip to the grocery store, a doctor visit, or help apartment hunting, becoming a volunteer driver is a great way to help out without having to make a huge time commitment.</p>
        <div style={{ width: 250 }}><Button href="https://forms.gle/E5u9ddp5PjyCBkFAA">Driver Signup Form</Button></div>
        <Header2>Other services</Header2>
        <p>Let us know if you have another skill or ability that would help families settle in to your community. Some examples include jobs, tutoring, translation, social integration, recreation, mental health, child care, accessing other refugee groups, accessing federal and provincial services, social services and more.</p>
        <div style={{ width: 250 }}><Button href="https://forms.gle/ZnbFk3a9dk5Trz5G7">Other Services Signup Form</Button></div>

    </MainDiv>
}

