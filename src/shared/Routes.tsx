import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Detail } from "../screens/Detail";
import { SetUsername } from "../screens/SetUsername";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { HomePage } from "../screens/HomePage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Children } from "react";
import { theme } from "./themes/Theme";
import { Login } from "../screens/Login";

type TScreenDefinition = {
   login: undefined;
   home: undefined;
   setusername: undefined;
   detail: {numero: number};
}


const Stack = createNativeStackNavigator<TScreenDefinition>();


export const AppRoutes = () => {

    return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName='login' 
    
    screenLayout={({children}) => 
    (<SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
      {children}
   </SafeAreaView>

    )}
    screenOptions={{headerShown: false, contentStyle: {backgroundColor: theme.colors.background},

    }}
    >

    <Stack.Screen 
         name="login" 
         component={Login}/>


   <Stack.Group 
   screenOptions={{
      presentation: 'formSheet', 
      sheetCornerRadius:24,
   }}

   >
      <Stack.Screen 
         name="home" 
         component={HomePage}/>

      <Stack.Screen 
         name="detail" 
         component={Detail} 
         options={{sheetAllowedDetents: [0.5, 0.7]
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

export type NavigationScreenProps = NativeStackNavigationProp<TScreenDefinition>;
export type TrouteProps<T extends keyof TScreenDefinition > = RouteProp<TScreenDefinition, T>;