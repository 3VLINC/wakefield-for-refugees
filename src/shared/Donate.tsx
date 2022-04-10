import React from 'react';
import styled from 'styled-components';

const SubmitInput = styled.input<{ sz: 'small' | 'medium' }>(({ theme, sz }) => `
    margin-left: 10px;
    background-color: ${theme.tertiaryColor};
    color: ${theme.darkColor};
    padding: ${(sz === 'small') ? 16 : 24}px;
    font-size: ${(sz === 'small') ? 16 : 24}px;
    border-radius: 8px;
    white-space: nowrap;
    display: block;
    text-align: center;
    padding: 24px;
    border-color: transparent;
    border-width: 0px;
`);

const PixelImg = styled.img`display:none;`;


export const Donate: React.FC = () => <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="QA97DEYX68BD2" />
    <SubmitInput sz="medium" type="submit" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" value="Donate" />
    <PixelImg alt="" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
</form>;

