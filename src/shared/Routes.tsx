import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Detail } from "../screens/Detail";
import { SetUsername } from "../screens/SetUsername";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { HomePage } from "../screens/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Children } from "react";

type TScreenDefiniton = {
   home: undefined;
   setusername: undefined;
   detail: {numero: number};
}


const Stack = createNativeStackNavigator<TScreenDefiniton>();


export const AppRoutes = () => {

    return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName='home' 
    screenOptions={{headerShown: false}}
    screenLayout={({children}) => <SafeAreaView>{children}</SafeAreaView>}
    >
   <Stack.Group 
   screenOptions={{
      presentation: 'formSheet', 
      sheetCornerRadius:24
   }}>
      <Stack.Screen 
         name="home" 
         component={HomePage}/>

      <Stack.Screen 
         name="detail" 
         component={Detail} 
         options={{sheetAllowedDetents: [0.7, 0.95]
         }}/>

      <Stack.Screen 
         name="setusername" 
         component={SetUsername} 
         options={{sheetAllowedDetents: [0.5, 0.8]
         }}/>
    </Stack.Group>
    </Stack.Navigator>
 </NavigationContainer>
    )
}

export type NavigationScreenProps = NativeStackNavigationProp<TScreenDefiniton>;
export type TrouteProps<T extends keyof TScreenDefiniton > = RouteProp<TScreenDefiniton, T>;