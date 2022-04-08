import React from 'react';
import styled from 'styled-components';
import { WithTheme } from "../interface";
const CTA = styled.a<WithTheme & { size: 'small' | 'large' }>(({ theme, size }) => `
    background-color: ${theme.tertiaryColor};
    padding: ${(size === 'small') ? 16 : 24}px;
    font-size: ${(size === 'small') ? 16 : 24}px;
    border-radius: 8px;
    color: ${theme.darkColor};
    white-space: nowrap;
    display: block;
    text-align: center;
`);


export const Button: React.FC<{ href: string, size?: 'small' | 'large' }> = ({ children, href, size = 'small' }) => <CTA size={size} href={href} children={children} />;