import styled from 'styled-components';
import {colours} from './../styles/globals';
import {RobotoRegular} from './../styles/fonts';

export const StyledApp = styled.div`
	background-color: #282c34;
	height: 100vh;
`;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: ${RobotoRegular};
	height: 100vh;
`;

export const Button = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 18px;
	width: 99px;
	height: 48px;
	border-radius: 4px;
	background-color: ${colours.brightBlue};
    text-shadow: 1px 1px 1px rgba(0, 28, 64, 0.25);
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: normal;
	color: ${colours.white};
	cursor: pointer;
	font-weight: bold;
`;