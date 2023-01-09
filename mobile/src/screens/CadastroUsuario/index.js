import { StatusBar } from "expo-status-bar";
import React from "react";
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
        />

        <TextInput
          style={styles.input}
          placeholder="Número"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
        />
        <Button
          title="Criar Conta"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
