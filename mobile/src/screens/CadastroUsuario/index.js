import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, Header, Icon } from "react-native-elements";
import { styles } from "./styles";

export function CadastroUsuario({ navigation }) {
  const API_URL = `https://oxefood-backend-production.up.railway.app/api/cliente`;

  const [email, setEmail] = useState();
  const [numero, setNumero] = useState();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [senha, setSenha] = useState();

  async function salvar() {
    if (email && numero && nome && sobrenome && senha) {
      await axios
        .post(API_URL, {
          perfilUrl: "",
          email: email,
          fone: numero,
          nome: nome,
          password: senha,
          sobrenome: sobrenome,
        })
        .then(function (response) {
          alert("Cadastrado");
        })
        .catch((err) => alert(err));
    } else {
      alert("vazio");
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        containerStyle={{
          backgroundColor: "#C60303",
          paddingBottom: 30,
          paddingTop: 30,
        }}
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
              fontSize: 32,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Cadastro
          </Text>
        }
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          value={email}
          onChangeText={(value) => setEmail(value)}
          keyboardType={"email-address"}
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          autoCorrect={false}
          value={numero}
          onChangeText={(value) => setNumero(value)}
          keyboardType={"numeric"}
          maxLength={20}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          value={nome}
          onChangeText={(value) => setNome(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          value={sobrenome}
          onChangeText={(value) => setSobrenome(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value={senha}
          onChangeText={(value) => setSenha(value)}
          secureTextEntry={true}
        />

        <Button
          title="Criar Conta"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => salvar()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
