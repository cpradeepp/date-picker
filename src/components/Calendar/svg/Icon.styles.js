import styled from 'styled-components';
import {colours} from './../../../styles/globals';

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${props => props.styles && props.styles.width ? props.styles.width : '39px'};
	height: ${props => props.styles && props.styles.height ? props.styles.height : '44px'};
	border-radius: ${props => props.styles && props.styles.borderRadius ? props.styles.borderRadius : '2px'};
	background-color: ${props => props.styles && props.styles.backgroundColor ? props.styles.backgroundColor : colours.powderBlue};
	${props => props.styles && props.styles.marginLeft ? `margin-left: ${props.styles.marginLeft}` : ''};
	${props => props.styles && props.styles.borderRight ? `border-right: ${props.styles.borderRight}` : ''};
	${props => props.styles && props.styles.borderLeft ? `border-left: ${props.styles.borderLeft}` : ''};
	${props => props.styles && props.styles.cursor ? `cursor: ${props.styles.cursor}` : ''};
`;

export const IconContainer = styled.div`
	display: flex;
`;