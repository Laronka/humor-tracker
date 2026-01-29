import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import { NavigationScreenProps, TrouteProps } from "../shared/Routes";
import { Header } from "../shared/Components/header";
import { Footer } from "../shared/Components/footer";
import { useEffect, useState } from "react";
import { BaseInput } from "../shared/Components/BaseInput";
import { theme } from "../shared/themes/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Detail } from "./Detail";




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
            
        
        <View style={style.emptyContentContainer}>
            <Text style={style.emptyContentText}> Voce ainda não{'\n'} registrou seu humor </Text>
            </View> 
    
        <Footer>
         <View style={style.footerContainer}>
            <Text style={style.footerTitle}>
                {name ? 'como está seu humor hoje?' : 'escreva seu nome aqui'}
            </Text>
            
            {!name && ( /*Adicionado essa verificação pra ver se já tem um nome salvo*/
            <BaseInput label="Nome" asButton onPress={()=> navigation.navigate('setusername')}>
                <TextInput   
                    autoFocus
                    editable={false} /*Desabilita a função do teclado e fica apenas como botão*/
                    pointerEvents='none' /*habilita o click no Iphone, para o Android não precisa*/
                    style={style.footerInput}
                    placeholder="Escreva seu nome aqui:" 
                />
            
            </BaseInput> )}

            {name && ( /*Muda para essa tela se tiver um nome criado, então seleciona o humor*/
                <View style={style.footerIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 1})}><FontAwesome name="star-o" size={32} color={theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 2})}><FontAwesome name="star-o" size={32} color={theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 3})}><FontAwesome name="star-o" size={32} color={theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 4})}><FontAwesome name="star-o" size={32} color={theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 5})}><FontAwesome name="star-o" size={32} color={theme.colors.textPlaceholder} /></TouchableOpacity>
                </View>
            )}
            
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
    emptyContentContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyContentText:{
        fontSize: theme.fonts.sizes.subtitle,
        fontFamily: theme.fonts.family.italic,
        color: theme.colors.text,
        textAlign: 'center'
    },
    footerIcons:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }

})