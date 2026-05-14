import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  name: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },

  info: {
    fontSize: 16,
    marginBottom: 6,
    color: "#555",
  },

  button: {
    marginTop: 25,
    width: "60%",
    borderRadius: 10,
    overflow: "hidden", 
  },
})