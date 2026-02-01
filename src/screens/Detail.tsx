import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button } from "../shared/Components/Button";


import { NavigationScreenProps, TrouteProps } from "../shared/Routes";
import { BaseInput } from "../shared/Components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { useState } from "react";

export const Detail = () =>{  

// recebendo parametros

const navigation = useNavigation<NavigationScreenProps>();
const { params } = useRoute<TrouteProps<'detail'>>();

const [rate, setRate] = useState(params.rate);
const [date, setDate] = useState('');
const [description, setDescription] = useState('');


    return <>
         <View style={style.footerContainer}>
            <Text style={style.footerTitle}>
                como está seu humor hoje:{params.rate}
            </Text>

            <View style={style.footerIcons}>
                    <TouchableOpacity onPress={() => setRate(1)}>
                        <FontAwesome 
                        name={rate >= 1 ? "star" : "star-o"} 
                        size={32} 
                        color={rate >= 1 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(2)}>
                        <FontAwesome 
                        name={rate >= 2 ? "star" : "star-o"} 
                        size={32} 
                        color={rate >= 2 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(3)}>
                        <FontAwesome 
                        name={rate >= 3 ? "star" : "star-o"} 
                        size={32} 
                        color={rate >= 3 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(4)}>
                        <FontAwesome 
                        name={rate >= 4 ? "star" : "star-o"} 
                        size={32} 
                        color={rate >= 4 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => setRate(4)}>
                        <FontAwesome 
                        name={rate >= 5 ? "star" : "star-o"} 
                        size={32} 
                        color={rate >= 5 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                </View>
            
         
            <BaseInput label="Data e hora">
                <TextInput   
                    value={date}
                    onChangeText={setDate}
                    style={style.footerInput}
                    placeholder="Escreva seu nome aqui:" 
                />
            </BaseInput>

            <BaseInput label="Descreva seu humor aqui">
                <TextInput   
                    value={description}
                    onChangeText={setDescription}
                    style={{...style.footerInput, ...style.footerInputArea}}
                    placeholder="Escreva seu nome aqui:" 
                    multiline
                    numberOfLines={16}
                />
            </BaseInput>

            <View style={style.actionsContainer}>

            {params.id && (
           <Button variant='outlined' color={theme.colors.error}>
            <AntDesign name={"delete"} size={20} color={theme.colors.error} />
           </Button>
            )}
           <Button 
           title="Cancelar"
           grow
           variant='outlined'
           onPress={() => navigation.goBack()}
            
           />
           <Button 
           title="Salvar"
           grow
           />

           </View>
            
        </View>
    </>;
    
}
    
const style = StyleSheet.create({

    footerContainer:{
        gap: 8,
        padding:16
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
    footerInputArea:{
        height: theme.fonts.sizes.body * 16,
        textAlignVertical: 'top'
       },
     footerIcons:{
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    }
});