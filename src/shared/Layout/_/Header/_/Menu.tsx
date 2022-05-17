import * as React from "react"
import styled from 'styled-components';


const MenuArea = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: #FFF;
    list-style: none;
    flex-wrap: wrap;
    margin:0 10px 0 0;
    padding:0;
`;

const MenuItem = styled.li`
    flex: 0;
    flex-basis: 100%;
    text-align: right;
    @media (min-width: 720px) {
        flex: 1;
        flex-basis: auto;
    }
`;

const MenuItemLink = styled.a`
    color: #FFF;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: normal;
    display: block;
    opacity: 0.5;
`;

const MenuItemHighlight = styled.a`
    color: #FFF;
    padding: 10px;
    opacity: 1;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    white-space: nowrap;
    display: block;
`;


export const Menu: React.FC<{ path: string }> = ({ path: currentPath }) => {

    const IsActiveLink: React.FC<{ path: string }> = ({ path, children }) => path === currentPath ? <MenuItemHighlight href={path} children={children} /> : <MenuItemLink href={path} children={children} />;

    return <MenuArea>
        <MenuItem><IsActiveLink path="/">Home</IsActiveLink></MenuItem>
        <MenuItem><IsActiveLink path="/get-involved/">Get Involved</IsActiveLink></MenuItem>
        <MenuItem><IsActiveLink path="/about-wakefield/">About Wakefield</IsActiveLink></MenuItem>
        <MenuItem><IsActiveLink path="/donate/">Donate</IsActiveLink></MenuItem>
    </MenuArea>
}