import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";

// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{
    
const navigation = useNavigation<NavigationScreenProps>();


    return(
        <>
        <Header name='João'/>
            <Text style={{fontFamily: 'extraBold'}}></Text>
            
            {/* Navegando entre tela com botões e passando parametros. */}
            <TouchableOpacity onPress={() => navigation.navigate('detail', {numero: 5})} style={styles.ButtonHome}> 
                <Text>Go to detail</Text> 
            </TouchableOpacity>

            {/* Navegando entre tela com botões e passando parametros. */}
             <TouchableOpacity onPress={() => navigation.navigate('setusername', {nome: "joao", idade: 26})} style={styles.ButtonHome}> 
                <Text>Go to set username</Text>
             </TouchableOpacity>
           
        </>
    )
}

const styles = StyleSheet.create({

    ButtonHome:{
        
        color: '#000000',
        gap: 9,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 150,
        marginLeft: 10,
        marginTop: 2,
        backgroundColor: '#22ef17'

    },




})