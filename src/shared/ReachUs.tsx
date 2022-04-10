import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";
import { Header } from "./Header";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    color: ${theme.darkFont};
    padding:40px;
`);

export const ReachUs: React.FC = () => {

    return <MainDiv id="reach-us">
        <Header>Reach Us</Header>
        <p>
            We can be reached at <a href="mailto:wakefieldforrefugees@gmail.com">wakefieldforrefugees@gmail.com</a> or join our <a href="https://facebook.com/groups/wakefield-for-refugees">Facebook Group</a>.
        </p>

    </MainDiv>
}

