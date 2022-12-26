
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Image } from 'react-native-elements';

import { styles } from './styles';

export function Inicio() {
    return (
        <View style={styles.container}>
          <Image
            source={require('../../assets/header-inicio.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Falta pouco para matar sua fome!</Text>

          <Button 
            title="Entrar"
            buttonStyle={styles.button}
            containerStyle={{marginBottom:16, borderRadius:16}}
            titleStyle={{color:'#000'}}
          />

          <Button 
            title="Cadastrar-se"
            buttonStyle={styles.button}
            titleStyle={{color:'#000'}}
          />
        </View>
      );
}