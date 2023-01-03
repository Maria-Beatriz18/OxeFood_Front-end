import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { EsqueceuSenha } from './src/screens/EsqueceuSenha';
import { Inicio } from './src/screens/Inicio';
import { Login } from './src/screens/Login';
import { CadastroUsuario } from './src/screens/CadastroUsuario';
import { HomeScreen } from './src/screens/HomeScreen';
import { Restaurante } from './src/screens/Restaurante';
import { ListaDeProdutos } from './src/screens/ListaDeProdutos';
import { Endereco } from './src/screens/Endereco';
import { Sacola } from './src/screens/Sacola';

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
          <Screen name="CadastroUsuario" component={CadastroUsuario}/>
          <Screen name="HomeScreen" component={HomeScreen}/>
          <Screen name="Restaurante" component={Restaurante}/>
          <Screen name="ListaDeProdutos" component={ListaDeProdutos}/>
          <Screen name="Endereco" component={Endereco}/>
          <Screen name="Sacola" component={Sacola}/>
        </Navigator>
    </NavigationContainer>
  );
}

