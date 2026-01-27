import { Pressable, StyleSheet, Text } from "react-native"
import { theme } from "../themes/Theme";


interface IButtonProps{
    children?: React.ReactNode;
    onPress?:()=> void;
    title?: string;
}

export const Button = ({children, onPress, title}:IButtonProps) =>{


return(
    <Pressable 
    onPress={onPress}
    style={({pressed})=> pressed ? styles.ButtonPressed  : styles.Button  }>
        <Text style={styles.ButtonText}>{children}{title}</Text>
    </Pressable>

)}

const styles = StyleSheet.create({

    Button: {
        padding: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    ButtonPressed: {
        padding: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
        opacity: 0.5,

    },
    ButtonText:{
        color:theme.colors.primarytext,
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.body,
    }



})