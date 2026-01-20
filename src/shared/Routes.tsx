import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Detail } from "../screens/Detail";
import { SetUsername } from "../screens/SetUsername";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { HomePage } from "../screens/HomePage";

type TScreenDefiniton = {
   home: undefined;
   setusername: undefined;
   detail: {numero: number};
}


const Stack = createNativeStackNavigator<TScreenDefiniton>();


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

export type NavigationScreenProps = NativeStackNavigationProp<TScreenDefiniton>;
export type TrouteProps<T extends keyof TScreenDefiniton > = RouteProp<TScreenDefiniton, T>;