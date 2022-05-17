import { PageProps } from "gatsby";
import * as React from "react"
import styled from 'styled-components';
import { GetInvolved } from "../shared/GetInvolved";
import { Layout } from "../shared/Layout/Layout";

const LogoImg = styled.img`
  width: 320px;
`;

const MainDiv = styled.main`
  max-width:1024px;
`

const GetInvolvedPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <MainDiv>
        <GetInvolved />
      </MainDiv>

    </Layout>
  )
}

export default GetInvolvedPage
