import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from './_/Header/Header';
import { Helmet } from 'react-helmet';
import { Theme } from '../../interface';
import { Footer } from './_/Footer';
import CoverPhoto from "../../images/cover-photo.jpeg";
const theme: Theme = ({
    primaryColor: '#ce2121',
    secondaryColor: '#45c8c4',
    tertiaryColor: '#eed2e8',
    darkColor: '#281529',
    lightColor: '#e8ccea',
    darkFont: '#000',
    lightFont: '#FFF',
});

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Arial', sans-serif;
    margin:0;
    text-align: left;
    background-color: #281529;
}

a {
    text-decoration: none;
    color: ${theme.primaryColor};
}

p {
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
}
ul, ol {
    padding: 0;
}
ul li, ol li {
    margin-bottom: 1.0rem;
    list-style-position: inside;
}
`;

const ContentArea = styled.div`
    text-align: left;
    background-color: #FFFFFF;
`;

export const Layout: React.FC<{ path: string }> = ({ children, path }) => {

    return (<>
        <Helmet>
            <title>Wakefield for Refugees</title>
            <meta property="og:url" content="https://wfr-wpr.ca" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Wakefield for Refugees" />
            <meta property="og:description" content="Wakefield for Refugees is a group of community members based in and around Wakefield (Québec) Canada involved in sponsoring and resettling refugees to Canada." />
            <meta property="og:image" content={CoverPhoto} />
        </Helmet>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Header path={path} />
            <ContentArea>
                {children}
            </ContentArea>
            <Footer />
        </ThemeProvider>
    </>)

}