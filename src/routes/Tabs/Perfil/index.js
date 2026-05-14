import { View, Text, Button, Image } from "react-native"
import styles from "./styles"

const images = {
  "rodolfo.jpg": require("../../../../assets/rodolfo.jpg"),
  "samuel.jpg": require("../../../../assets/samuel.jpg"),
  "user.jpg": require("../../../../assets/user.jpg"),
}

export default function Perfil({ navigation, route }) {
  const { user } = route.params

  const userImage = images[user.image] || images["user.jpg"]

  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.image} />

      <Text style={styles.name}>Nome: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Aniversário: {user.birth}</Text>

      <View style={styles.button}>
        <Button title="LOGOUT" onPress={() => navigation.replace("Login")} />
      </View>
    </View>
  )
}