import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View  } from 'react-native'
import { BaseInput } from '../shared/Components/BaseInput';
import { theme } from '../shared/themes/Theme';
import { Button } from '../shared/Components/Button';

export const SetUsername = () =>{



return (
    <View style={style.container}>
            <Text style={style.title}>
                    Qual o seu nome:
            </Text>
        <BaseInput label='Nome'>
            <TextInput 
                    
                    autoFocus
                    pointerEvents='none' /*habilita o click no Iphone, para o Android não precisa*/
                    style={style.input}
                    placeholder="Escreva seu nome aqui:"
            />       
        </BaseInput> 
        
        <View style={{flex: 1}}></View> 

        <Button>
            <Text>Salvar</Text>
        </Button>
    </View>
    );
}

const style = StyleSheet.create({

    container:{
        flex: 1,
        gap: 8,
        paddingLeft:16,
        paddingRight:16,
        marginBottom: 32,
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