import styled from 'styled-components';

export const StyledItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${props => props.marginLeft || 0};
`;