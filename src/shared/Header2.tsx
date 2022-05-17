import React from 'react';
import styled from 'styled-components';
import { WithTheme } from "../interface";

const Text = styled.h2<WithTheme & { color: 'light' | 'dark' }>(({ theme, color }) => `
    color: ${color === 'dark' ? theme.darkFont : theme.lightFont};
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-weight: bold;
    max-width: 320px;
`);

export const Header2: React.FC<{ color?: 'light' | 'dark' }> = ({ children, color = 'dark' }) => <Text color={color} children={children} />;