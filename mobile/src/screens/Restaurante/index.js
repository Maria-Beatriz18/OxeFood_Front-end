import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Avatar,
  Input,
  Button,
  SearchBar,
  Card,
  ListItem,
} from "react-native-elements";
import { style } from "./styles";

export function Restaurantes({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
          padding: 0,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/restaurante.jpeg")}
          style={{ width: 430, height: 250 }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <ScrollView>
          <Card>
            <Card.Title>Promo Bob's</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require("../../assets/header-login.png")}
              onPress={() => navigation.navigate("")}
            ></Card.Image>
          </Card>

          <Card>
            <Card.Title>exemplo</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require("../../assets/header-login.png")}
              onPress={() => navigation.navigate("")}
            ></Card.Image>
          </Card>

          <Card>
            <Card.Title>exemplo</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require("../../assets/header-login.png")}
              onPress={() => navigation.navigate("")}
            ></Card.Image>
          </Card>

          <Card>
            <Card.Title>exemplo</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require("../../assets/header-login.png")}
              onPress={() => navigation.navigate("")}
            ></Card.Image>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});
