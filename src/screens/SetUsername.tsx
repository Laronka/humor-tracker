import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View  } from 'react-native'
import { BaseInput } from '../shared/Components/BaseInput';
import { theme } from '../shared/themes/Theme';
import { Button } from '../shared/Components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { NavigationScreenProps, TrouteProps } from '../shared/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SetUsername = () =>{

    
    const navigation = useNavigation<NavigationScreenProps>();
    const insets = useSafeAreaInsets();
    
    const [name, setName] = useState('');

    useEffect ( () => {
        AsyncStorage.getItem('user-name').then(value => {setName(value || '')})
    }, [] );

    const handleSaveUserName = async () => {
        try {
            await AsyncStorage.setItem('user-name', name);
         }     
        catch (e) {
    // saving error
}
        navigation.popTo('home', {newName: name})
    }

return (
    <View style={{...style.container, paddingBottom: insets.bottom + 16}}>

            <Text style={style.title}>
                    Qual o seu nome?
            </Text>
        <BaseInput label='Nome'>
            <TextInput 
                    autoFocus
                    value={name}
                    onChangeText={setName}
                    pointerEvents='none' /*habilita o click no Iphone, para o Android não precisa*/
                    style={style.input}
                    placeholder="Escreva seu nome aqui:"
            />       
        </BaseInput> 
        
        <View style={{flex: 1}}></View> 

        <Button 
            title='Salvar'
            onPress={handleSaveUserName}
        />
            
            
        
    </View>
    );
}

const style = StyleSheet.create({

    container:{
        flex: 1,
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