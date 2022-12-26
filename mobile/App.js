import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { Inicio } from './src/screens/Inicio';

export default function App() {
  
  const { Navigator, Screen } = createNativeStackNavigator();
  
  return(
    <NavigationContainer>

        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
        
        <Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
          <Screen name="Inicio" component={Inicio}/>
        </Navigator>
    </NavigationContainer>
  );
}

