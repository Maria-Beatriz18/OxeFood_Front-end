import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { Button, Header, Icon, Image } from "react-native-elements";

export function PedidoConcluido({ navigation, route }) {
  const [getUserId, setUserId] = useState(route.params.userId);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        backgroundColor="#c60303"
        centerComponent={
          <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>
            Pedido
          </Text>
        }
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
      />

      <View
        style={{
          alignItems: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "75%",
        }}
      >
        <Image
          source={require("../assets/ready.png")}
          style={{ width: 140, height: 140, marginVertical: 16 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Pedido realizado com sucesso!
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#c60303",
            width: "80%",
            marginVertical: 16,
            padding: 8,
          }}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("HomeScreen", { userId: getUserId })
          }
        >
          <Text style={{ color: "white" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
