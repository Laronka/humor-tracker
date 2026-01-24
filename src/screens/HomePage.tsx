import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, TextInput } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";
import { useState } from "react";
import { BaseInput } from "../shared/Components/BaseInput";




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
            <Text style={style.footerTitle}>Footer:</Text>
            <BaseInput label="Nome" asButton onPress={()=> navigation.navigate('setusername')}>
                <TextInput   
                    editable={false}
                />
            </BaseInput>
        </Footer>
    </>;
    
}

const style = StyleSheet.create({

    footerTitle:{},


    
})