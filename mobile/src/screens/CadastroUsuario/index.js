import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles';

export function CadastroUsuario ({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        onChangeText={text => setEmail(text)}
                        value={getEmail}
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Número'
                        onChangeText={text => setnumero(text)}
                        value={getnumero}
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Nome completo'
                        onChangeText={text => setNomeCompleto(text)}
                        value={getNomeCompleto}
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        onChangeText={text => setSenha(text)}
                        value={getSenha}
                        autoCorrect={false}
                    />

                    <Button 
                       title="Criar Conta"
                       style={styles.botao}
                       onPress={()=>navigation.navigate('Login')}
                    />
                </View>
              </KeyboardAvoidingView>
    );
}


