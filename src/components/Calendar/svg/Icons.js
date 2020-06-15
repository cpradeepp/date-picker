import React from 'react';
import {Icon, IconContainer} from './Icon.styles';
import {colours} from './../../../styles/globals';

export const UpDownIcon = ({styles}) => (
	<Icon
		styles={{
			width: `39px`,
			height: `44px`,
			borderRadius: '2px',
			backgroundColor: colours.powderBlue,
			marginLeft: 'auto'
		}}
	>
		<IconContainer>
			<svg width="7px" height="13px" viewBox="0 0 7 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
				<title>Group</title>
				<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Form-Fields/Dropdown-Select-Toggle" transform="translate(-18.000000, -15.000000)" fill="#00357C">
						<g id="Group" transform="translate(18.000000, 15.000000)">
							<polygon id="Triangle" transform="translate(3.500000, 10.000000) rotate(180.000000) translate(-3.500000, -10.000000) " points="3.5 7 7 13 0 13"></polygon>
							<polygon id="Triangle" points="3.5 0 7 6 0 6"></polygon>
						</g>
					</g>
				</g>
			</svg>
		</IconContainer>
	</Icon>
);

export const LeftIcon = ({onClick}) => (
	<Icon
		styles={{
			width: `42px`,
			height: `55px`,
			borderRadius: 'none',
			backgroundColor: colours.white,
			borderRight: `1px solid ${colours.veryLightBlue}`,
			cursor: 'pointer'
		}}
		onClick={onClick}
	>
		<IconContainer>
			<svg width="10px" height="17px" viewBox="0 0 10 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
				<title>UI-Icons/Link-Arrow</title>
				<g id="Monitor-Listing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="GetAgent-FE-Dev-Task" transform="translate(-848.000000, -453.000000)" fill="#006CFA">
						<g id="exchange-date-CTA" transform="translate(104.000000, 340.000000)">
							<g id="date-picker" transform="translate(728.000000, 92.000000)">
								<g id="month" transform="translate(2.000000, 2.000000)">
									<g id="UI-Icons/Link-Arrow" transform="translate(19.000000, 27.500000) scale(-1, 1) translate(-19.000000, -27.500000) translate(14.000000, 19.000000)">
										<polygon id="Path" points="1.41421356 16.9705627 8.8817842e-15 15.5563492 7.07106781 8.48528137 7.10542736e-15 1.41421356 1.41421356 0 9.89949494 8.48528137"></polygon>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</IconContainer>
	</Icon>
);

export const RightIcon = ({onClick}) => (
	<Icon
		styles={{
			width: `42px`,
			height: `55px`,
			borderRadius: 'none',
			backgroundColor: colours.white,
			borderLeft: `1px solid ${colours.veryLightBlue}`,
			marginLeft: 'auto',
			cursor: 'pointer'
		}}
		onClick={onClick}
	>
		<IconContainer>
			<svg width="11px" height="17px" viewBox="0 0 11 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
				<title>UI-Icons/Link-Arrow</title>
				<g id="Monitor-Listing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="GetAgent-FE-Dev-Task" transform="translate(-1198.000000, -453.000000)" fill="#006CFA">
						<g id="exchange-date-CTA" transform="translate(104.000000, 340.000000)">
							<g id="date-picker" transform="translate(728.000000, 92.000000)">
								<g id="month" transform="translate(2.000000, 2.000000)">
									<g id="UI-Icons/Link-Arrow" transform="translate(364.500000, 19.000000)">
										<polygon id="Path" points="1.41421356 16.9705627 8.8817842e-15 15.5563492 7.07106781 8.48528137 7.10542736e-15 1.41421356 1.41421356 0 9.89949494 8.48528137"></polygon>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</IconContainer>
	</Icon>
);