import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from './_/Header/Header';
import { Helmet } from 'react-helmet';
import { Theme } from '../../interface';

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
}

a {
    text-decoration: none;
    color: ${theme.primaryColor};
}

p {
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
}
`;

const ContentArea = styled.div`
    text-align: left;
`;

export const Layout: React.FC = ({ children }) => {

    return (<>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet" />
            <title>Wakefield for Refugees</title>
        </Helmet>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Header />
            <ContentArea>
                {children}
            </ContentArea>
        </ThemeProvider>
    </>)

}