import styled from 'styled-components';
import {colours} from './../../../styles/globals';
import {RobotoBold} from './../../../styles/fonts';

export const StyledTitle = styled.div`
	display: flex;
	font-family: ${RobotoBold};
	font-size: 20px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.4;
	letter-spacing: normal;
	color: ${colours.darkishBlue};
`;