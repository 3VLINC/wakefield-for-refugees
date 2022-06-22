import * as React from "react"
import styled from 'styled-components';
import { WithTheme } from '../interface';
const Border = styled.div<WithTheme>(({ theme }) => `
    margin: 40px auto 20px auto;
    border: 20px solid #EEE;
    max-width: 480px;
`)

const Img = styled.img<WithTheme>(({ theme }) => `
    display: block;
    width: 100%;
    
`)

export const FeatureImg: React.FC<{ src: any }> = ({ src}) => <Border><Img src={src} /></Border>