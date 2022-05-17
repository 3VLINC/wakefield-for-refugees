import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { DonateButtons } from "./DonateButtons";
import { Header1 } from "./Header1";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const Donate: React.FC = () => {

    return <MainDiv id="donate">
        <Header1>Donate</Header1>
        <p>Donations in support of our cause are greatly appreciated. Please be advised that we are unable to issue tax receipts as we are not a registered charity.</p>
        <p>
            Email money transfers may be sent to <a href="mailto:wfrdonate@gmail.com">wfrdonate@gmail.com</a>.
        </p>
        <p>Cheques may be mailed to <br /><br />79 du Parc de La Peche,<br />La Peche,<br /> Quebec J0X 2W0</p>
        <p>
            Donations may be made via paypal.
        </p>
        <DonateButtons />
    </MainDiv>
}

