import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


import { TrouteProps } from "../shared/Routes";
import { BaseInput } from "../shared/Components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { Footer } from "../shared/Components/footer";

export const Detail = () =>{  

// recebendo parametros
const { params } = useRoute<TrouteProps<'detail'>>();

    return <>
         <View style={style.footerContainer}>
            <Text style={style.footerTitle}>
                como está seu humor hoje:{params.rate}
            </Text>

            <View style={style.footerIcons}>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesome 
                        name={params.rate >= 1 ? "star" : "star-o"} 
                        size={32} 
                        color={params.rate >= 1 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesome 
                        name={params.rate >= 2 ? "star" : "star-o"} 
                        size={32} 
                        color={params.rate >= 2 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesome 
                        name={params.rate >= 3 ? "star" : "star-o"} 
                        size={32} 
                        color={params.rate >= 3 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesome 
                        name={params.rate >= 4 ? "star" : "star-o"} 
                        size={32} 
                        color={params.rate >= 4 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <FontAwesome 
                        name={params.rate >= 5 ? "star" : "star-o"} 
                        size={32} 
                        color={params.rate >= 5 ? theme.colors.Highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
                </View>
            
         
            <BaseInput label="Data e hora">
                <TextInput   
                    style={style.footerInput}
                    placeholder="Escreva seu nome aqui:" 
                />
            </BaseInput>

            <BaseInput label="Descreva seu humor aqui">
                <TextInput   
                    style={{...style.footerInput, ...style.footerInputArea}}
                    placeholder="Escreva seu nome aqui:" 
                    multiline
                    numberOfLines={16}
                />
            </BaseInput>
            
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
    }
});