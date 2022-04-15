import * as React from "react"
import styled from 'styled-components';
import { AboutUs } from "../shared/AboutUs";
import { AboutWakefield } from "../shared/AboutWakefield";
import { Donate } from "../shared/Donate";
import { GetInvolved } from "../shared/GetInvolved";
import { LatestUpdates } from "../shared/LatestUpdates";
import { Layout } from "../shared/Layout/Layout";
import { ReachUs } from "../shared/ReachUs";

const LogoImg = styled.img`
  width: 320px;
`;

const MainDiv = styled.main`
  max-width:1024px;
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <AboutUs />
      <MainDiv>
        <LatestUpdates />
        <ReachUs />
        <GetInvolved />
        <Donate />
      </MainDiv>
      <AboutWakefield />

    </Layout>
  )
}

export default IndexPage
