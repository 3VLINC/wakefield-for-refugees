import * as React from "react"
import styled from 'styled-components';
import Logo from "../../../../images/wfr-logo-white.png";
import { Menu } from "./_/Menu";
import { WithTheme } from "../../../../interface";

const MainDiv = styled.div<WithTheme>(({ theme }) => `
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    background: ${theme.secondaryColor};

`);

const LogoImgA = styled.a<WithTheme>(({ theme }) => `
  margin:0;
  padding:0;
  height: 140px;
  padding: 20px;
  width: auto;
  display: block;
  flex: 0;
`);
const LogoImg = styled.img<WithTheme>(({ theme }) => `
    height: 100%;
    width: auto;
`);


export const Header: React.FC<{ path: string }> = ({ path }) => {

    return <MainDiv>
        <LogoImgA href="/"><LogoImg src={Logo} alt="Wakefield for Refugees" /></LogoImgA>
        <Menu path={path} />
    </MainDiv>
}