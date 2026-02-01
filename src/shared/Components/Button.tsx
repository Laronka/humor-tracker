import { Pressable, StyleSheet, Text } from "react-native"
import { theme } from "../themes/Theme";


interface IButtonProps{
    children?: React.ReactNode;
    color?: string;
    grow?: boolean; 
    variant?: 'contained' | 'outlined';
    onPress?:()=> void;
    title?: string;
}

export const Button = ({children, onPress, title, grow, color, variant='contained'}:IButtonProps) =>{


return(
    <Pressable 
    onPress={onPress}
    style={({pressed})=>({
        ...styles.Button, 
        ...(pressed ? styles.ButtonPressed : {}),
        ...(grow ? {flexGrow: 1}: {}),
        ...(variant === 'contained' ? styles.ButtonContained : {}),
        ...(variant === 'outlined' 
            ? 
            {   
                ...styles.ButtonOutlined,
                ...(color && {borderColor: color})
            }
            
            : {})
    })} > 
    {children}
    {!children && <Text 
    style={{
        ...styles.ButtonText,
        ...(variant === 'contained' ? styles.ButtonContainedText : {}),
        ...(variant === 'outlined' ? styles.ButtonOutlinedText : {})        
        }}>
        {title}
        </Text>}


    </Pressable>


)}

const styles = StyleSheet.create({

    Button: {
        padding: 12,
        
        borderRadius: 8,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    ButtonPressed: {
        opacity: 0.5,
    },
     ButtonContained: {
        backgroundColor: theme.colors.primary,
    },
     ButtonOutlined: { 
        borderWidth: 2,
        borderColor: theme.colors.primary
    },
     ButtonContainedText:{
        color:theme.colors.primarytext,
    },
     ButtonOutlinedText:{
        color:theme.colors.primary
    },    
    ButtonText:{
        color:theme.colors.primarytext,
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.body,
    }
})