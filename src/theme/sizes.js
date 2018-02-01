import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;
const isSmallScreen = false;

if(screenWidth <= 320) {
  isSmallScreen = true;
}

export default {
  screen: {
    smallScreen: isSmallScreen,
    height: screenHeight,
    heightHalf: screenHeight * 0.5,
    heightThird: screenHeight * 0.333,
    heightTwoThirds: screenHeight * 0.666,
    heightQuarter: screenHeight * 0.25,
    heightThreeQuarters: screenHeight * 0.75,
    heightFifth: screenHeight * 0.2,
    heightSixth: screenHeight * 0.1666,
    width: screenWidth,
    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
    widthFifth: screenWidth * 0.2,
    widthSixth: screenWidth * 0.1666,
  },
  margin: {
    normal: 20,
    tight: 10,
    large: 30,
    none: 0,
  },
};
