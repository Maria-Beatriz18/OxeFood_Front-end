import React, { useContext } from "react";
import { useState } from "react";

import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Header, Icon, Button } from "react-native-elements";
import { CartContext } from "../../context/CartContext";

export function Sacola({ navigation, route }) {
  const { cart, removerItem, totalValue } = useContext(CartContext);
  const [getToken, setToken] = useState(route.params.token);
  const [getUserId, setUserId] = useState(route.params.userId);
  const [getLojaId, setLojaId] = useState(route.params.lojaId);
  const [getFrete, setFrete] = useState(route.params.valorFrete);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc" }}>
      <View>
        <Header
          backgroundColor="#c60303"
          centerComponent={
            <Text style={{ fontSize: 24, fontWeight: "600", color: "white" }}>
              Sacola
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

        <FlatList
          data={cart}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{
            alignItems: "center",
            marginTop: 16,
            paddingBottom: 340,
          }}
          renderItem={({ index, item }) => (
            <View
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 14,
                }}
              >
                <View
                  style={{
                    width: "60%",
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {item.nome}
                  </Text>
                  <Text style={{ marginBottom: 10 }}>{item.descricao}</Text>
                  <Text style={{ fontWeight: "bold", marginBottom: 2 }}>
                    R$: <Text style={{ fontWeight: "400" }}>{item.valor}</Text>
                  </Text>
                </View>

                <View>
                  <Image
                    source={{ uri: item.imagem }}
                    style={{ width: 100, height: 100, marginRight: 10 }}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#c60303",
                  width: "80%",
                  marginBottom: 10,
                  padding: 8,
                }}
                activeOpacity={0.7}
                onPress={() => removerItem(index)}
              >
                <Text style={{ color: "white" }}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "80%", justifyContent: "flex-start" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "700", marginVertical: 10 }}
            >
              Valor total:{" "}
              <Text style={{ fontWeight: "400" }}>
                R$ {totalValue.toFixed(2)}
              </Text>
            </Text>
          </View>
          {totalValue > 0 ? (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c60303",
                width: "80%",
                marginBottom: 10,
                padding: 8,
              }}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("Pedido", {
                  token: getToken,
                  userId: getUserId,
                  pedido: cart,
                  lojaId: getLojaId,
                  valorFrete: getFrete,
                })
              }
            >
              <Text style={{ color: "white" }}>Fazer pedido</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "grey",
                width: "80%",
                marginBottom: 10,
                padding: 8,
              }}
            >
              <Text style={{ color: "white" }}>Fazer pedido</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
