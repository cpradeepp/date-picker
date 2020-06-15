import styled from 'styled-components';
import {colours} from './../../styles/globals';

export const CalendarContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
`;

export const InputBox = styled.div`
	display: flex;
	width: 245px;
	height: 44px;
	border-radius: 4px;
	border: solid 2px ${colours.darkishBlue};
	background-color: #ffffff;
	cursor: pointer;
`;

export const SelectedText = styled.div`
	${props => props.dateSelected ? ``: `opacity: 0.5`};
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	color: ${colours.darkishBlue};
	margin: 12px 0 12px 15px;
`;

export const DatePicker = styled.div`
	display: flex;
	position: absolute;
	top: 48px;
	width: 388px;
	height: 343px;
	border-radius: 4px;
	box-shadow: 0 0 32px 0 rgba(0, 53, 124, 0.25);
	border: solid 2px ${colours.darkishBlue};
	background-color: ${colours.white};
`;

export const ActionsRow = styled.div`
	display: flex;
	flex-direction: row;
	height: 55px;
	border-bottom: solid 1px ${colours.veryLightBlue};
`;

export const DaysRow = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto auto auto auto;
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.33;
	letter-spacing: normal;
`;

export const Day = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colours.darkishBlue};
	height: 48px;
    text-align: center;
	border-bottom: solid 1px ${colours.veryLightBlue};
	
	&:nth-child(7n+1) {
		&:nth-last-child(-n+7) {
			border-bottom: none;
		}
	}
	
	&:nth-child(7n+1) {
		&:nth-last-child(-n+7) ~ div {
			border-bottom: none;
		}
	}
`;

export const DayHover = styled.div`
	width: 32px;
	height: 32px;
	display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => !isNaN(props.currDay) ? `pointer` : `auto`};
	border-radius: 50%;
    ${props => props.selectedDate ? `background-color: ${colours.brightBlue}` : ``};
    ${props => props.selectedDate ? `color: ${colours.white}` : ``};
	font-weight: ${props => isNaN(props.currDay) || props.currentDate || props.selectedDate ? `bold;` : `normal`};
    ${props => !props.selectedDate && !isNaN(props.currDay) ? 
		`&:hover {
			background-color: ${colours.veryLightBlue};
            font-weight: bold;
		}` : ``}
`;

export const DateMonth = styled.div`
	display: flex;
	flex: 1;
	font-size: 16px;
	line-height: 24px;
	font-weight: bold;
    align-items: center;
    justify-content: center;
`;