import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { sacolaItens } from "../../data/sacolaItens";

export function Sacola({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccc" }}>
     
     

      <View>
      <TouchableOpacity
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "8%",
          }}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Sacola")}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Sacola
          </Text>
        </TouchableOpacity>
      
        <FlatList
          data={sacolaItens}
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
                  backgroundColor: "red",
                  width: "80%",
                  marginBottom: 10,
                  padding: 8,
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Restaurantes")}
              >
                <Text style={{ color: "white" }}>Retirar</Text>

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
                
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 20,
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
                                          
                    }}
                  >
                   
                  </Text>
                  <Text style={{fontSize:22, marginBottom:30 }}>Total: R$20,00</Text>
                 
                </View>

                <View>
                  <Image
                    
                    style={{ width: 100, height: 100, marginRight: 10 }}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "red",
                  width: "80%",
                  marginBottom: 10,
                  padding: 8,
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Restaurantes")}
              >
                <Text style={{ color: "white" }}>Retirar</Text>

              </TouchableOpacity>

              

              
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
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "80%",
          }}
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Sacola")}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
            Pagar
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}
