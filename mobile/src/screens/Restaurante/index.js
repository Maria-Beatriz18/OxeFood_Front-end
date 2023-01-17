import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../../context/CartContext";

import { shopItens } from "../../data/shopItens";

export function Restaurantes({ navigation }) {
  const { adicionarItem } = useContext(CartContext);
  const handleAddToCart = (item) => {
    adicionarItem(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Image
        source={require("../../assets/restaurante.jpeg")}
        style={{
          width: "100%",
          height: 250,
          paddingTop: 50,
        }}
      />

      <View>
        <FlatList
          data={shopItens}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{
            alignItems: "center",
            marginTop: 16,
            paddingBottom: 340,
          }}
          renderItem={({ item }) => (
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
                    R$: <Text style={{ fontWeight: "400" }}>{item.preco}</Text>
                  </Text>
                  <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                    Serve até {item.pessoas} pessoas.
                  </Text>
                </View>

                <View>
                  <Image
                    source={item.image}
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
                onPress={() => handleAddToCart(item)}
              >
                <Text style={{ color: "white" }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#c60303",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            height: "80%",
          }}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Sacola")}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Sacola
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
