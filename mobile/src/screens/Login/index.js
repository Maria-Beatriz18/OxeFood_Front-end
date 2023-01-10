import axios from "axios";
import React, { useState } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Header, Image, Input } from "react-native-elements";

import { styles } from "./styles";

export function Login({ navigation }) {
  const API_URL = `https://oxefood-backend-production.up.railway.app/api/login/signin`;

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function login() {
    if (email && senha) {
      await axios
        .post(API_URL, {
          username: email,
          password: senha,
        })
        .then(function (response) {
          setEmail(""), setSenha("");
          if (response.data.token) {
            navigation.navigate("HomeScreen", {
              token: response.data.token,
              id: response.data.userid,
            });
          }
        })
        .catch((err) => alert("Usuário incorreto"));
    } else {
      Alert.alert("Erro", "Email ou senha inválidos.")
    }
  }
  return (
    <View style={styles.container}>
      <Header
        centerComponent={
          <Image
            source={require("../../assets/header-login.png")}
            style={{ width: 220, height: 100 }}
          />
        }
        backgroundColor="#C60303"
      />

      <Input
        label="E-mail"
        placeholder="E-mail"
        inputContainerStyle={styles.input}
        containerStyle={[styles.inputContainer, { marginTop: 64 }]}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        label="Senha"
        placeholder="Senha"
        inputContainerStyle={styles.input}
        containerStyle={styles.inputContainer}
        secureTextEntry={true}
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />

      <TouchableOpacity
        style={{ marginRight: 180, marginTop: -8 }}
        onPress={() => navigation.navigate("EsqueceuSenha")}
      >
        <Text>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Button
        title="Entrar"
        containerStyle={{ marginTop: 80 }}
        buttonStyle={styles.button}
        onPress={() => login()}
      />
    </View>
  );
}
