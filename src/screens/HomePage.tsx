import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, TextInput } from "react-native"
import { NavigationScreenProps, TrouteProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";
import { useEffect, useState } from "react";
import { BaseInput } from "../shared/Components/BaseInput";
import { theme } from "../shared/themes/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";




// tipagem do TypeScript para resolver os erros de tipagem


export const HomePage = () =>{

const { params } = useRoute<TrouteProps<'home'>>();
const navigation = useNavigation<NavigationScreenProps>();

const [name, setName] = useState('');



useEffect(() => {
    if (params?.newName){
    setName(params?.newName || '');}
}, [params?.newName])

useEffect ( () => {
        AsyncStorage.getItem('user-name').then(value => {setName(value || '')})
    }, [] );

    return <>
        <Header>
            {name}
        </Header>
            
        
        <View style={{flex: 1}}></View> 
    
        <Footer>
         <View style={style.footerContainer}>
            <Text style={style.footerTitle}>
                Qual o seu nome:
            </Text>
            
            <BaseInput label="Nome" asButton onPress={()=> navigation.navigate('setusername')}>
                <TextInput   
                    autoFocus
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