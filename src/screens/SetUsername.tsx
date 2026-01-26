import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View  } from 'react-native'
import { BaseInput } from '../shared/Components/BaseInput';
import { theme } from '../shared/themes/Theme';

export const SetUsername = () =>{



return (
    <View style={style.container}>
            <Text style={style.title}>
                    Qual o seu nome:
            </Text>
        <BaseInput label='Nome'>
            <TextInput 
                    pointerEvents='none' /*habilita o click no Iphone, para o Android não precisa*/
                    style={style.input}
                    placeholder="Escreva seu nome aqui:"
            />       
              
        </BaseInput> 
    </View>
    );
}

const style = StyleSheet.create({

    container:{
        gap: 8,
        paddingLeft:16,
        paddingRight:16,
    },
    title:{
        textAlign: 'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
    },

    input:{
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        padding: 12,
    },

})