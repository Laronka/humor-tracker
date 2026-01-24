import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";
import { useState } from "react";



// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{
    
const navigation = useNavigation<NavigationScreenProps>();

const [nome, setNome] = useState('João Pedro');

    return <>
        <Header>
            {nome}
        </Header>
            
        
        <View style={{flex: 1}}></View> 
    
        <Footer>
            <Text style={{fontFamily: 'extraBold'}}>Home</Text>
        </Footer>
    </>;
    
}
