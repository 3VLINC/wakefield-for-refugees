import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header } from "./Header";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const Donate: React.FC = () => {

    return <MainDiv id="donate">
        <Header>Donate</Header>
        <p>Donations in support of our cause are greatly appreciated. Please be advised that we are unable to issue tax receipts as we are not a registered charity.</p>
        <p>
            Email money transfers may be sent to <a href="mailto:wfrdonate@gmail.com">wfrdonate@gmail.com</a>.
        </p>
        <p>Cheques may be mailed to <br /><br />79 du Parc de La Peche,<br />La Peche,<br /> Quebec J0X 2W0</p>
        <p>
            Donations may be made via paypal.
        </p>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="QA97DEYX68BD2" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
        </form>

    </MainDiv>
}

