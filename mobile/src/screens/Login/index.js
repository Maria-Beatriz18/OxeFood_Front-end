import React from 'react';
import { TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { Button, Header, Image, Input } from 'react-native-elements';

import { styles } from './styles';

export function Login({ navigation }) {
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
            label='E-mail'
            placeholder='E-mail'
            inputContainerStyle={styles.input}
            containerStyle={[styles.inputContainer, {marginTop:64}]}
        />

        <Input
            label='Senha'
            placeholder='Senha'
            inputContainerStyle={styles.input}
            containerStyle={styles.inputContainer}
            secureTextEntry={true}
        />

        <TouchableOpacity 
            style={{marginRight:180, marginTop:-8}}
            onPress={()=>navigation.navigate('EsqueceuSenha')}
        >
            <Text>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Button 
            title='Entrar'
            containerStyle={{marginTop: 80}}
            buttonStyle={styles.button}
            onPress={()=>navigation.navigate('HomeScreen')}
        />
    </View>
  );
}