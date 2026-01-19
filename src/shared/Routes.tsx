import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "../screens/Detail";
import { SetUsername } from "../screens/SetUsername";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "../screens/HomePage";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {

    return (
 <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="setusername" component={SetUsername} />
    </Stack.Navigator>
 </NavigationContainer>
    )
}