import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { DonateButtons } from "./DonateButtons";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const Donate: React.FC = () => {

    return <MainDiv id="donate">
        <Header1>Donate</Header1>
        <p>Donations in support of our cause are greatly appreciated. Please be advised that we are unable to issue tax receipts as we are not a registered charity.</p>
        <p>Thanks for your generous support!</p>
        <Header2>E-Transfer</Header2>
        <p>
            Email money transfers may be sent to <a href="mailto:wfrdonate@gmail.com">wfrdonate@gmail.com</a>.
        </p>
        <Header2>PayPal</Header2>
        <p>
            Donations may be made via paypal.
        </p>
        <DonateButtons />
        <Header2>Cheques</Header2>
        <p>Cheques may be mailed to <br /><br />79 du Parc de La Peche,<br />La Peche,<br /> Quebec J0X 2W0</p>
        <Header2>Gift Cards</Header2>
        <p>You can now donate an IGA or Jean Coutu gift card purchased with your spare Air Miles cash to a Ukranian family. Just follow these simple steps.</p>

        <ol>
            <li>Login to your Air Miles account</li>
            <li>Under Rewards choose eVouchers</li>
            <li>Choose a voucher (e.g. IGA Grocery Gift Card)</li>
            <li>Choose the option to gift the card to someone else and enter wakefieldforrefugees@gmail.com as the recipient email. (You can use WFR as the first and last name.)</li>
        </ol>
        <p>WFR will distribute cards to Ukrainian families to assist them during their transition to life in Wakefield.</p>
        <Header2>Items</Header2>
        <p>WFR accepts donations of furniture and other household items that are in good condition.</p>
        <p>We are not able to pick up items, but can accept items that are dropped off at our storage location in Wakefield.</p>
        <p>Some items we accept include:</p>
        <ul>
            <li>Beds, pillows and bedding</li>
            <li>Rugs</li>
            <li>Sofas and loveseats</li>
            <li>Tables and Chairs</li>
            <li>Dishes and Utensils</li>
            <li>Kitchen appliances (microwaves, toaster ovens, blenders)</li>
            <li>Lamps</li>
            <li>Televisions</li>
            <li>Electric stoves and dryers (but no washing machines, gas dryers or fridges)</li>
        </ul>
        <p>Please note that large items are not accepted during the winter months as the driveway to the storage area is not plowed.</p>
        <p>You can <a href="wakefieldforrefugees@gmail.com">contact us by email</a> to co-ordinate drop off.</p>
        <p>Please be aware that items deemed unsuitable will not be accepted.</p>
    </MainDiv>
}

