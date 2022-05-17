import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header1 } from "./Header1";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const GetInvolved: React.FC = () => {

    return <MainDiv id="get-involved">
        <Header1>Get Involved</Header1>
        <p>Do you have housing to offer? Can you help drive people to appointments? Want to join one of our committees?</p>

        <p><a href="https://forms.gle/E5u9ddp5PjyCBkFAA">Complete our volunteer form</a> to let us know how you can help and we will be in touch.</p>

    </MainDiv>
}

