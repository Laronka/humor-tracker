import { StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { theme } from "../themes/Theme";





export const ListItem = () => {

    return (
        <View  style={styles.container}>
            <View>
               <Text  style={styles.dateTimeText}>
                03/02/2026 20:20
               </Text>
            </View>   
            <View style={styles.starContainer}>
                <FontAwesome 
                        name={"star"} 
                        size={24} 
                        style={{...styles.starFill, ...{color:(theme.colors.Highlight)}}}  //testando concatenação
                         />
                <FontAwesome 
                        name={"star"} 
                        size={24} 
                        color={theme.colors.Highlight}
                         />
                <FontAwesome 
                        name={"star"} 
                        size={24} 
                        color={theme.colors.Highlight}
                         />
                <FontAwesome 
                        name={"star"} 
                        size={24} 
                        color={theme.colors.Highlight}
                         />
                <FontAwesome 
                        name={"star"} 
                        size={24} 
                        color={theme.colors.Highlight}
                         />
            </View>
            
            <View>
                <Text style={styles.descriptionText}>
                    Texto aqui
                </Text>                
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    
    container:{
        gap: 12,
        borderRadius: 8,
        padding: 8,
        backgroundColor: theme.colors.Paper,

    },
    dateTimeText:{
        color: theme.colors.textPlaceholder,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular
        

    },
    starContainer:{
        flexDirection: 'row',
        alignItems: 'center'
        

    },
    starFill:{
        backgroundColor: theme.colors.BackgroundHighlight,
        padding: 4,
        

    },
     descriptionText:{
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular

    },

})