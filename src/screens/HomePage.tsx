import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, TextInput } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";
import { useState } from "react";
import { BaseInput } from "../shared/Components/BaseInput";
import { theme } from "../shared/themes/Theme";




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
         <View style={style.footerContainer}>
            <Text style={style.footerTitle}>
                Qual o seu nome:
            </Text>
            
            <BaseInput label="Nome" asButton onPress={()=> navigation.navigate('setusername')}>
                <TextInput   
                    editable={false} /*Desabilita a função do teclado e fica apenas como botão*/
                    pointerEvents='none' /*habilita o click no Iphone, para o Android não precisa*/
                    style={style.footerInput}
                    placeholder="Escreva seu nome aqui:"
                    
                />
            
            </BaseInput>
            
        </View>
        </Footer>
    </>;
    
}

const style = StyleSheet.create({

    footerContainer:{
        gap: 8
    },
    footerTitle:{
        textAlign: 'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
    },
    footerInput:{
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.textPlaceholder,
        padding: 12, 
    },

})