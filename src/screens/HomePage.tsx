import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";

// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{
    
const navigation = useNavigation<NavigationScreenProps>();


    return(
        <>
        <Header name=''/>
            <Text style={{fontFamily: 'extraBold'}}>Home</Text>
            
            {/* Navegando entre tela com botões e passando parametros. */}
            <Button title="Go to Detail" onPress={() => navigation.navigate('detail', {numero: 5})}/>

            {/* Navegando entre tela com botões e passando parametros. */}
            <Button title="Go to Set Username" onPress={() => navigation.navigate('setusername', {nome: "joao", idade: 26})}/>
            
        </>
    )
}