import { PageProps } from "gatsby";
import * as React from "react"
import styled from 'styled-components';
import { AboutWakefield } from "../shared/AboutWakefield";
import { Layout } from "../shared/Layout/Layout";

const LogoImg = styled.img`
  width: 320px;
`;

const MainDiv = styled.main`
  max-width:1024px;
`

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <MainDiv>
      </MainDiv>
      <AboutWakefield />
    </Layout>
  )
}

export default IndexPage
