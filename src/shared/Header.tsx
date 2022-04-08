import React from 'react';
import styled from 'styled-components';
import { WithTheme } from "../interface";

const Text = styled.h1<WithTheme & { color: 'light' | 'dark' }>(({ theme, color }) => `
    color: ${color === 'dark' ? theme.darkFont : theme.lightFont};
    font-family: 'Poppins', sans-serif;
    border-bottom: 5px solid ${color === 'dark' ? theme.darkFont : theme.lightFont};
    font-weight: bold;
    max-width: 320px;
`);

export const Header: React.FC<{ color?: 'light' | 'dark' }> = ({ children, color = 'dark' }) => <Text color={color} children={children} />;