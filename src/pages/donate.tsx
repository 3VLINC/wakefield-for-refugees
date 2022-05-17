import { PageProps } from "gatsby";
import * as React from "react"
import styled from 'styled-components';
import { Donate } from "../shared/Donate";
import { Layout } from "../shared/Layout/Layout";

const LogoImg = styled.img`
  width: 320px;
`;

const MainDiv = styled.main`
  max-width:1024px;
`

const DonatePage: React.FC<PageProps> = ({ path }) => {
    return (
        <Layout path={path}>
            <MainDiv>
                <Donate />
            </MainDiv>
        </Layout>
    )
}

export default DonatePage
