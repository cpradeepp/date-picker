import styled from 'styled-components';
import {colours} from './../../styles/globals';

export const StyledRow = styled.div`
	display: flex;
	flex-shrink: 0;
    flex-grow: 0;
	flex-direction: row;
	width: 1220px;
    padding-top: 43px;
    padding-bottom: 41px;
	border-radius: 4px;
	border: solid 2px ${colours.darkishBlue};
	background-color: ${colours.white};
`;