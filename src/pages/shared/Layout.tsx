import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    font-family: arial;
}
`;

export const Layout: React.FC = ({ children }) => {

    return (<>
        <GlobalStyle />
        {children}
    </>)

}