import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from "../interface";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: #FFF;
    background-color: ${theme.darkColor};
    padding:40px;
`);

const AboutArea = styled.div<WithTheme>(({ theme }) => `
    background-color: ${theme.primaryColor};
    padding: 40px;
`);

export const AboutWakefield: React.FC = () => {

    return <MainDiv>
        <div>
            <h3>About Wakefield, Quebec</h3>
            <p>
                Wakefield is a small, primarily English-speaking village in western Quebec, an approximately 25-minute drive from Ottawa, Canada's capital. We are a tight-knit, compassionate community made up of artists, government workers, farmers, tradespeople, among others, that care deeply about social justice and human rights issues. This is a rural area, best suited to those who enjoy living in nature.
            </p>
        </div>
    </MainDiv>
}