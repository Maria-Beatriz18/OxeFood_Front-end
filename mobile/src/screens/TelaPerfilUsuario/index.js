import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Button, Icon, Header, Image } from "react-native-elements";
import { styles } from "./styles";

export function TelaPerfilUsuario({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        backgroundColor="#c60303"
        leftComponent={
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../../assets/avatar.png")}
            onPress={() => navigation.navigate("TelaPerfilUsuario")}
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
            Perfil
          </Text>
        }
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <Button
          title="Restaurante"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("")}
        />

        <Button
          title="Meus Pedidos"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("")}
        />

        <Button
          title="Alterar Senha"
          containerStyle={{ marginTop: 20 }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("MudarSenha")}
        />
      </View>
    </SafeAreaView>
  );
}
