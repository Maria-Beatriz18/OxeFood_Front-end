import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { EsqueceuSenha } from './src/screens/EsqueceuSenha';
import { Inicio } from './src/screens/Inicio';
import { Login } from './src/screens/Login';

export default function App() {
  
  const { Navigator, Screen } = createNativeStackNavigator();
  
  return(
    <NavigationContainer>

        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        
        <Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
          <Screen name="Inicio" component={Inicio}/>
          <Screen name="Login" component={Login}/>
          <Screen name="EsqueceuSenha" component={EsqueceuSenha}/>
        </Navigator>
    </NavigationContainer>
  );
}

