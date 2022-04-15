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
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <AboutUs />
      <LatestUpdates />
      <ReachUs />
      <GetInvolved />
      <Donate />
      <AboutWakefield />

    </Layout>
  )
}

export default IndexPage
