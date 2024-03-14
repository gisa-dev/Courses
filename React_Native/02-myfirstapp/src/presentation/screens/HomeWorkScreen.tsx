import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

// Task 1
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     flex: 1,
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//   },
// });

// Task 2
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//     width: 'auto',
//   },
// });

// Task 3
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//     alignSelf:'flex-end'
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//     alignSelf:'center'
//   },
// });

// Task 4
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row-reverse',
//     justifyContent: 'space-between',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     alignSelf: 'center',
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//     alignSelf: 'flex-end',
//   },
// });

// Task 5
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row',
//     justifyContent:'space-between'

//   },
//   box: {
//     width: 100,
//     // height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',

//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',

//   },
// });

// Task 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',

//   },
//   box: {
//     // width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     flex:2,
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     flex:2,
//     backgroundColor: '#F0A23B',

//   },
//   blueBox: {
//     flex:4,
//     backgroundColor: '#28C4D9',

//   },
// });

// Task 6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//   },
// });

// Task 8
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     right: -100,
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//   },
// });

// Task 9
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//     bottom: -100,
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     right: -100,
//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//   },
// });

// Task 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    bottom: -50,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
