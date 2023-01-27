import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EsqueceuSenha } from "./src/screens/EsqueceuSenha";
import { Inicio } from "./src/screens/Inicio";
import { Login } from "./src/screens/Login";
import { CadastroUsuario } from "./src/screens/CadastroUsuario";
import { ListaDeProdutos } from "./src/screens/ListaDeProdutos";
import { HomeScreen } from "./src/screens/HomeScreen";
import { Endereco } from "./src/screens/Endereco";
import { Sacola } from "./src/screens/Sacola";
import { Restaurantes } from "./src/screens/Restaurante";
import { ListaPedidos } from "./src/screens/ListaPedidos";
import { TelaPerfilUsuario } from "./src/screens/TelaPerfilUsuario";
import { StatusBar } from "react-native";
import { CartProvider } from "./src/context/CartContext";
import { Pedido } from "./src/screens/Pedido";
import { PedidoConcluido } from "./src/PedidoConcluido";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartProvider>
        <Navigator
          initialRouteName="Inicio"
          screenOptions={{ headerShown: false }}
        >
          <Screen name="Inicio" component={Inicio} />
          <Screen name="Login" component={Login} />
          <Screen name="EsqueceuSenha" component={EsqueceuSenha} />
          <Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Screen name="HomeScreen" component={HomeScreen} />
          <Screen name="Restaurantes" component={Restaurantes} />
          <Screen name="ListaDeProdutos" component={ListaDeProdutos} />
          <Screen name="Endereco" component={Endereco} />
          <Screen name="Sacola" component={Sacola} />
          <Screen name="ListaPedidos" component={ListaPedidos} />
          <Screen name="TelaPerfilUsuario" component={TelaPerfilUsuario} />
          <Screen name="Pedido" component={Pedido} />
          <Screen name="PedidoConcluido" component={PedidoConcluido} />
        </Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}
