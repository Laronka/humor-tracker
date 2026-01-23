import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";



// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{
    
const navigation = useNavigation<NavigationScreenProps>();


    return <>
        <Header name='João'/>
                     
        <View style={{flex: 1}}></View> 

        <Footer>
            <Text style={{fontFamily: 'extraBold'}}>Home</Text>
        </Footer>
    </>;
    
}
