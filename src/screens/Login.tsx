import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import { NavigationScreenProps } from "../shared/Routes";
import { theme } from "../shared/themes/Theme";
import { BaseInput } from "../shared/Components/BaseInput";
import { useState } from "react";


export const Login = () => {
    
    const username="joaoiaronka622@gmail.com"  /*Simulando as credenciais num banco de dados*/
    const usersenha="123456" 

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


const navigation = useNavigation<NavigationScreenProps>();

const verificaoLogin = () => {
    if (username !== email || usersenha != senha ){
        Alert.alert("Credencial incorreta")
    return
    }
    
    navigation.navigate('home')
}


return(
    <View style={style.container}>
        <View>
            <Text style={style.title}>Tela de login</Text>
        </View>
       <BaseInput>
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
       </BaseInput>
       <BaseInput>
            <TextInput
                placeholder="senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
       </BaseInput>

       <TouchableOpacity onPress={verificaoLogin} style={style.botaoLogin} activeOpacity={0.8}>
            <Text style={style.textButton}> Login </Text>
       </TouchableOpacity>
    </View>
);
}

const style=StyleSheet.create({

    textButton:{
        textAlign: 'center',
        color: '#fff'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: 32,
    },
    botaoLogin:{
       marginTop: 20,
       padding: 10,
       borderRadius: 10,
       backgroundColor: theme.colors.primary,
       textAlign: 'center',
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
})