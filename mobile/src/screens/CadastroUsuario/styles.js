import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerInput: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    width: "90%",
  },
  input: {
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    backgroundColor: "white",
    padding: 10,
  },
  botaoLogin: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#C60303",
    borderRadius: 16,
    padding: 14,
    width: 310,
  },
});
