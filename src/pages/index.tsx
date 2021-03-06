import { PageProps } from "gatsby";
import * as React from "react"
import styled from 'styled-components';
import { AboutUs } from "../shared/AboutUs";
import { LatestUpdates } from "../shared/LatestUpdates";
import { Layout } from "../shared/Layout/Layout";

const MainDiv = styled.main`
  max-width:1024px;
`

const IndexPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <AboutUs />
      <MainDiv>
        <LatestUpdates />
      </MainDiv>
    </Layout>
  )
}

export default IndexPage
