import { View, Text, TextInput, Button } from "react-native"
import { useState } from "react"
import styles from "./styles"
import users from "../../../data/users"

export default function Login({ navigation }) {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    const foundUser = users.find(
      (u) =>
        u.username.toLowerCase() === user.toLowerCase() &&
        u.password === password
    )

    if (foundUser) {
      navigation.replace("Tabs", { user: foundUser })
    } else {
      alert("Usuário ou senha inválidos")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <View style={styles.button}>
        <Button title="ENTRAR" onPress={handleLogin} />
      </View>>
    </View>
  )
}