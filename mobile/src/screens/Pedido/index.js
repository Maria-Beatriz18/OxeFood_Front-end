import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, Header, Icon } from "react-native-elements";
import { CartContext } from "../../context/CartContext";

export function Pedido({ navigation, route }) {
  const { totalValue } = useContext(CartContext);
  const [pedido, setPedido] = useState(route.params.pedido);
  const [getToken, setToken] = useState(route.params.token);
  const [getUserId, setUserId] = useState(route.params.userId);
  const [getLojaId, setLojaId] = useState(route.params.lojaId);
  const [getFrete, setFrete] = useState(route.params.valorFrete);

  async function fazerPedido() {
    await axios.post(
      `https://oxefood-backend.up.railway.app/api/pedido/${getUserId}/${getLojaId}/pedido`,
      {
        items: pedido,
        observacao: "",
        situacaoPagamento: "",
        valorTotal: totalValue,
      }
    );
  }

  function finalizarPedido() {
    fazerPedido();
    navigation.navigate("PedidoConcluido", { userId: getUserId });
  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
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
      <View>
        <View style={{ marginHorizontal: 16, marginVertical: 24 }}>
          <Text>Resumo de valores:</Text>

          <Text>
            Subtotal:{" "}
            {"                                                                "}
            R$
            {totalValue.toFixed(2)}
          </Text>
          <Text>
            Taxa de entrega:{" "}
            {"                                                   "}
            R${getFrete.toFixed(2)}
          </Text>
          <Text>
            Valor Total:{" "}
            {"                                                            "}
            R$
            {parseFloat(totalValue.toFixed(2)) +
              parseFloat(getFrete.toFixed(2))}
          </Text>
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
        onPress={() => finalizarPedido()}
      >
        <Text style={{ color: "white" }}>Fazer pedido</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
