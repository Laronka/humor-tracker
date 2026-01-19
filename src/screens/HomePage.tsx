import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";

// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{
    
const navigation = useNavigation<NavigationScreenProps>();


    return(
        <>
            <Text>HomePage</Text>
            {/* Navegando entre tela com botões e passando parametros. */}
            <Button title="Go to Detail" onPress={() => navigation.navigate('detail', { rate: 8})}/>
            
        </>
    )
}