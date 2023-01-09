import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { headerList } from "../../data/headerList";
import { categories } from "../../data/categoriesList";

import { styles } from "./styles";
import { shop } from "../../data/shopList";

export function HomeScreen({ navigation }) {
  const renderHeader = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.buttonHeader}
      onPress={() => navigation.navigate(item.navigate)}
    >
      <Text style={styles.textHeader}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCategories = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      key={item.key}
      style={{ alignItems: "center" }}
    >
      <Image source={item.image} style={styles.imageCategories} />
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderShop = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      key={item.key}
      style={styles.shopContainer}
      onPress={() => navigation.navigate("Restaurantes")}
    >
      <Image source={item.image} />
      <Text style={styles.textShop}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.headerContainer}>
        <Text>IFPE Jaboatão</Text>
      </View>

      <View style={{ marginTop: 2 }}>
        <FlatList
          data={headerList}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.spacingButton} />}
          contentContainerStyle={styles.header}
          renderItem={renderHeader}
        />
      </View>

      <View style={styles.barSeparator} />

      <View style={styles.searchContainer}>
        <Icon
          type="font-awesome"
          name="search"
          color="red"
          size={16}
          style={{ marginRight: 8, marginLeft: 8 }}
        />
        <TextInput placeholder="Buscar restaurante" style={{ width: "100%" }} />
      </View>

      <View>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.spacingButton} />}
          contentContainerStyle={styles.categories}
          renderItem={renderCategories}
        />
      </View>

      <View>
        <Text style={styles.titleShop}>Lojas</Text>
        <FlatList
          data={shop}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ paddingBottom: 10 }} />}
          renderItem={renderShop}
        />
      </View>
    </SafeAreaView>
  );
}
