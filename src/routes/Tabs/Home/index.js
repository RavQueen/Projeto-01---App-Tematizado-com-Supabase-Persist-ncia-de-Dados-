import { View, Text, Button } from "react-native"
import { useState } from "react"
import styles from "./styles"
import mensagens from "../../../data/mensagens"

export default function Home({ navigation, route }) {
  const { user } = route.params

  const [mensagem] = useState(
    user.username === "samuel"
      ? "Apenas seja o Goat da EP"
      : mensagens[Math.floor(Math.random() * mensagens.length)]
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user.name}</Text>

      <Text style={styles.msg}>{mensagem}</Text>

      <View style={styles.button}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate("Perfil", { user })}
        />
      </View>
    </View>
  )
}