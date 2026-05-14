import { View, Text, Button, Switch } from "react-native"
import styles from "./styles"

export default function Config({ route, navigation }) {
  const { user } = route.params 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Dados do usuário:</Text>
        <Text>Nome: {user.name}</Text>
        <Text>Username: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Data de nascimento: {user.birth}</Text>
        <Text>Senha: {user.password}</Text>
      </View>

      <View style={styles.button}>
        <Button title="LOGOUT" onPress={() => navigation.replace("Login")} />
      </View>
    </View>
  )
}