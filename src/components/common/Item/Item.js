import React from 'react';
import {StyledItem} from './Item.styles';

export const Item = ({marginLeft, children}) => (
	<StyledItem marginLeft={marginLeft}>
		{children}
	</StyledItem>
);