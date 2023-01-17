import React from 'react';
import { View } from 'react-native';
import { Button, Header, Icon, Input, Text } from 'react-native-elements';

import { styles } from './styles';

export function AlterarSenha({ navigation }) {
  return (
    <View style={styles.container}>

<Header
        backgroundColor="#c60303"
        leftComponent={
                <Button
                  buttonStyle={{
                    backgroundColor: "transparent",
                    paddingVertical: 2,
                    paddingHorizontal: 16,
                  }}
                  icon={
                    <Icon
                      name="angle-left"
                      type="font-awesome"
                      color="#fff"
                      size={36}
                    />
                  }
                  onPress={() => navigation.goBack()}
                />
              }
        
        centerComponent={
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: "white",
              marginTop: 4,
            }}
          >
            Alterar Senha
          </Text>
        }
      />

        

        <Input
            label='Informe a senha atual'
            labelStyle={{color:'#000'}}
            placeholder='Senha'
            inputContainerStyle={styles.input}
            containerStyle={[styles.inputContainer, {marginTop:64}]}
        />

           <Input
            label='Informe a nova senha'
            labelStyle={{color:'#000'}}
            placeholder='Senha'
            inputContainerStyle={styles.input}
            containerStyle={[styles.inputContainer, {marginTop:64}]}
        />

        <Button 
            title='Alterar Senha'
            containerStyle={{marginTop: 80}}
            buttonStyle={styles.button}
            onPress={()=>navigation.navigate('')}
        />


    </View>
  );
}