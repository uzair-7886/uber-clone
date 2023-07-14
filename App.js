import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import MapsScreen from './screens/MapsScreen';
import EatScreen from './screens/EatScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
<Stack.Screen name='Home' component={HomeScreen} options={{
  headerShown:false,
  statusBarColor:'white',
  statusBarStyle:'dark'
}}/>
<Stack.Screen name='MapScreen' component={MapsScreen} options={{
  headerShown:false,
  statusBarColor:'white',
  statusBarStyle:'dark'
}}/>
<Stack.Screen name='EatsScreen' component={EatScreen} options={{
  headerShown:false,
  statusBarColor:'white',
  statusBarStyle:'dark'
}}/>
        </Stack.Navigator>
        {/* <HomeScreen /> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


