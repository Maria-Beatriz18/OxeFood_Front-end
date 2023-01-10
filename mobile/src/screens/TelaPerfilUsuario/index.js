import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button, Icon,   Header, Image } from "react-native-elements";
import { styles } from './styles';


export function TelaPerfilUsuario({  navigation  }) {
     return(
        <View>
                 <Header backgroundColor="#c60303" 
                
          
         
  leftComponent={

    <Image style={{height: 50, width: 50}}
        source={require("../../assets/avatar.png")}
        onPress={() => navigation.navigate("TelaPerfilUsuario")}
      />
    
  }
/>
  
  <View style={{marginTop: 180}}>
<Button
          title="Restaurante"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Login")}
        />

<Button
          title="Meus Pedidos"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Login")}
        />

<Button
          title="Alterar Senha"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Login")}
        />

</View>
        </View> 
     )
}