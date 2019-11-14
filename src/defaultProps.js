import { StyleSheet } from 'react-native'

const defaultFunc = () => {}
const defaultSheet = StyleSheet.create({})

export const defaultProps = {
  leftElement: null,
  leftElementCallback: defaultFunc,
  rightElement: null,
  rightElementCallback: defaultFunc,
  bottomElement: null,
  bottomCallback: defaultFunc,
  bottomElementStyle: defaultSheet,
  isBottom: false,
  pinButtonStyle: defaultSheet,
  pinTextStyle: defaultSheet,
  leftButtonStyle: defaultSheet,
  rightButtonStyle: defaultSheet,
  leftContainerStyle: defaultSheet,
  rightContainerStyle: defaultSheet,
  isDeleteButton: false,
  buttonDeleteElement: null,
  buttonDeletePosition: null,
  pinContainerStyles: defaultSheet,
  containerStyles: defaultSheet,
  isLeft: false,
  isRight: false,
  zeroButtonStyle: defaultSheet,
  completeCallback: defaultFunc,
  pinLength: 4,
  pointsLength: 4,
  keyButtons: 'pin-buttons',
  pointStyle: defaultSheet,
  pointActiveStyle: defaultSheet,
  pointsStyle: defaultSheet,
  keyPoints: 'key-points',
  isPinError: false,
  errorPointStyles: defaultSheet,
}
