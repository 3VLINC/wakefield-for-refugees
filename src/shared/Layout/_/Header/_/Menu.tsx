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
    margin:0;
    padding:0;
`;

const MenuItem = styled.li`
    flex: 1;
    flex-basis: 100%;
    text-align: right;
    @media (min-width: 480px) {
        text-align: center;
        flex: 0;
        flex-basis: auto;
    }
`;

const MenuItemLink = styled.a`
    color: #FFF;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    white-space: nowrap;
    display: block;
    
`;
export const Menu: React.FC = () => {
    return <MenuArea>
        <MenuItem><MenuItemLink href="#about-us">About Us</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink href="#latest-updates">Updates</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink href="#reach-us">Reach Us</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink href="#get-involved">Get Involved</MenuItemLink></MenuItem>
    </MenuArea>
}