import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Avatar, Button, Header, Icon } from "react-native-elements";
import { CartContext } from "../../context/CartContext";

import { shopItens } from "../../data/shopItens";

export function Restaurantes({ navigation, route }) {
  const [produtos, setProdutos] = useState([]);
  const { cart, adicionarItem, limparCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    adicionarItem(item);
  };

  const [getToken, setToken] = useState(route.params.token);
  const [getUserId, setUserId] = useState(route.params.userId);
  const [getLojaId, setLojaId] = useState(route.params.lojaId);
  const [getFrete, setFrete] = useState(route.params.valorFrete);

  useEffect(() => {
    const { params } = route.params;
    setProdutos(params);
  }, []);

  const limparCarrinho = () => {
    limparCart();
    navigation.goBack(limparCart());
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Header
        backgroundColor="transparent"
        backgroundImage={require("../../assets/restaurante.jpeg")}
        leftComponent={
          <Button
            buttonStyle={{
              backgroundColor: "transparent",
            }}
            icon={
              <Icon
                name="angle-left"
                type="font-awesome"
                color="white"
                size={36}
              />
            }
            onPress={() => navigation.goBack(limparCart())}
          />
        }
      />

      <View>
        <FlatList
          data={produtos}
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
                    R$: <Text style={{ fontWeight: "400" }}>{item.valor}</Text>
                  </Text>
                  <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                    Porção: {item.porcao}
                  </Text>
                </View>

                <View>
                  <Avatar rounded source={{ uri: item.imagem }} size="large" />
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
            flexDirection: "row",
          }}
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate("Sacola", {
              token: getToken,
              userId: getUserId,
              lojaId: getLojaId,
              valorFrete: getFrete,
            })
          }
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Sacola
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "white",
                marginLeft: 14,
                marginRight: 2,
              }}
            >
              {cart.length}
            </Text>
            <Icon
              name="shopping-bag"
              type="font-awesome"
              color="white"
              size={16}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
