import React from 'react';
import { View } from 'react-native';
import { Button, Header, Image, Input } from 'react-native-elements';

import { styles } from './styles';

export function EsqueceuSenha({ navigation }) {
  return (
    <View style={styles.container}>

        <Header
            centerComponent={
            <Image
                source={require('../../assets/header-login.png')}
                style={{width:220, height:100}}
            />}

            backgroundColor='#C60303'
        />

        <Input
            label='Informe o e-mail cadastrado'
            labelStyle={{color:'#000'}}
            placeholder='E-mail'
            inputContainerStyle={styles.input}
            containerStyle={[styles.inputContainer, {marginTop:64}]}
        />

        <Button 
            title='Recuperar conta'
            containerStyle={{marginTop: 80}}
            buttonStyle={styles.button}
            onPress={()=>navigation.navigate('Inicio')}
        />
    </View>
  );
}