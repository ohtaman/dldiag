import * as Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default {
    fontFamily: 'Noto Sans JP, Roboto, sans-serif',
    palette: {
        primary1Color: '#0D0015',
        primary2Color: '#17184B',
        primary3Color: '#192F60',
        accent1Color: '#BA0505',
        accent2Color: '#E83929',
        accent3Color: '#E6B422',
        textColor: '#17184B',
        alternateTextColor: '#FCFCFC',
        canvasColor: '#FCFCFC',
        borderColor: '#0C1312',
        disabledColor: fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.darkBlack,
        clockCircleColor: fade(Colors.darkBlack, 0.07),
        shadowColor: Colors.fullBlack
    }
};