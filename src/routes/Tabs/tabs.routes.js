import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import Home from "./Home"
import Perfil from "./Perfil"
import Config from "../../screens/Config"

const Tab = createBottomTabNavigator()

export default function Tabs({ route }) {
  const { user } = route.params

  const getHeaderColor = () => {
    if (user.username === "samuel") return "#4CAF50"
    if (user.username === "rodolfo") return "#2196F3"
    return "#9C27B0"
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: getHeaderColor() },
        headerTintColor: "#fff",
        headerTitleAlign: "center",

        tabBarIcon: ({ color, size }) => {
          let iconName

          if (route.name === "Home") iconName = "home"
          else if (route.name === "Perfil") iconName = "person"
          else if (route.name === "Config") iconName = "settings"

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ user }}
        options={{ title: `Home - ${user.name}` }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ user }}
        options={{ title: `Perfil - ${user.name}` }}
      />

      <Tab.Screen
        name="Config"
        component={Config}
        initialParams={{ user }}
        options={{ title: `Config - ${user.name}` }}
      />
    </Tab.Navigator>
  )
}