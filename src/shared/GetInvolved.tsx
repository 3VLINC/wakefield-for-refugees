import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header } from "./Header";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const GetInvolved: React.FC = () => {

    return <MainDiv id="get-involved">
        <Header>Get Involved</Header>
        <p>Do you have housing to offer? Can you help drive people to appointments? Want to join one of our committees?</p>

        <p><a href="https://docs.google.com/forms/d/1HAqQgfiklH2XXcCcfyLRsSSveesZKCKUeUevVlqgkeo">Complete our volunteer form</a> to let us know how you can help and we will be in touch.</p>

    </MainDiv>
}

