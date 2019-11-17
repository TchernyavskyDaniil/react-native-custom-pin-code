import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewPinContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
  },
  button: {
    padding: 14,
    margin: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
  },
  anotherButtons: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  point: {
    borderRadius: 50,
    width: 11,
    height: 11,
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 5,
  },
  pointActive: {
    backgroundColor: 'black',
  },
});
