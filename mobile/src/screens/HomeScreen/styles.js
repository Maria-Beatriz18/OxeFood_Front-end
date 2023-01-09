import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    padding: 4,
    margin: 16,
    borderRadius: 32,
    borderColor: "#AAAAAA",
  },
  header: {
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 40,
  },
  buttonHeader: {
    padding: 10,
  },
  textHeader: {
    fontWeight: "regular",
    fontSize: 16,
  },
  spacingButton: {
    width: 10,
  },
  barSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  categories: {
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  imageCategories: {
    borderRadius: 32,
    width: 64,
    height: 64,
  },
  shopContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textShop: {
    marginLeft: 12,
    fontSize: 14,
  },
  titleShop: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
