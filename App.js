import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DatePickercomponent from './Components/DatePickercomponent';
import Login from './Components/Login';
import MainPage from './Components/Main';
import Member from './Components/Member';
// import Main from './Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainPage/> */}
      {/* <DatePickercomponent/> */}
      {/* <Login/> */}
      <Member/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding:50,
    backgroundColor: '#302B57',
  },
});
