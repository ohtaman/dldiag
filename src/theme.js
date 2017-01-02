import * as Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default {
    fontFamily: 'Noto Sans JP, Roboto, sans-serif',
    palette: {
        primary1Color: '#0C1312',
        primary2Color: '#9C0302',
        primary3Color: '#8C9392',
        accent1Color: '#BA0505',
        accent2Color: '#F20F21',
        accent3Color: '#94B78D',
        textColor: Colors.darkBlack,
        alternateTextColor: '#FCFCFC',
        canvasColor: '#F9E9CB',
        borderColor: '#0C1312',
        disabledColor: fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.darkBlack,
        clockCircleColor: fade(Colors.darkBlack, 0.07),
        shadowColor: Colors.fullBlack
    }
};