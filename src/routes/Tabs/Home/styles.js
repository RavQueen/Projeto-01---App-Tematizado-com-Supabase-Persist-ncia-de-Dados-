import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, 
  },

  title: {
    fontSize: 24,
    fontWeight: "bold", 
    marginBottom: 15,
    textAlign: "center",
  },

  msg: {
    fontSize: 16,
    marginBottom: 30,
    fontStyle: "italic",
    textAlign: "center", 
    color: "#555", 
  },

  button: {
    marginTop: 25,
    width: "60%",
    borderRadius: 10,
    overflow: "hidden", 
  },
})