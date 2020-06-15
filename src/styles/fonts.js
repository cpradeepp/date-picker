import {createGlobalStyle} from 'styled-components';
import RobotoBoldTTF from './../fonts/Roboto/Roboto-Bold.ttf';
import RobotoTTF from './../fonts/Roboto/Roboto-Regular.ttf';

export const RobotoBold = createGlobalStyle`
    @font-face {
        font-family: 'RobotoBold';
        src: url(${RobotoBoldTTF}) format('ttf');
    }
`;

export const RobotoRegular = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoTTF}) format('ttf');
    }
`;