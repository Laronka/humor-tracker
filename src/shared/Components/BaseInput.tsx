import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";


interface IBaseInputProps{
    label: string;
    children: React.ReactNode;
    asButton?: boolean;
    onPress?:()=> void;
}

 export const  BaseInput = ({children, label, asButton, onPress}: IBaseInputProps) => {

    return(
        <View style={style.BaseInputContainer}>
            <Text style={style.label}>{label}</Text>

            {asButton && (
                
                <Pressable onPress={onPress} style={({pressed}) => pressed? style.BaseInputPressed : style.BaseInput}>
                    {children}
                </Pressable>

            )}
            {!asButton && (
                <View style={style.BaseInput}>
                     {children}
                 </View>
            )}
        </View>

    );
 }

 const style = StyleSheet.create({

    BaseInputContainer:{
        gap: 5,
        flexDirection: 'column',
    },
    label: { 
        fontSize: theme.fonts.sizes.body,
        color: theme.colors.text,
        fontFamily: theme.fonts.family.regular,
    },
    BaseInput:{
        borderRadius: 8,
        color: theme.colors.background,
    },
    BaseInputPressed: {
        borderRadius: 8,
        color: theme.colors.background,
        opacity: 0.3,
    },
 }
);