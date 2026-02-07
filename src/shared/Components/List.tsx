import { StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { theme } from "../themes/Theme";



interface IListProps{
    rate: number;
    description: string;
    datetime: string;
}

export const ListItem = ({rate, datetime, description}: IListProps) => {

    return (
        <View  style={styles.container}>
            <View>
               <Text  style={styles.dateTimeText}>
                03/02/2026 20:20
               </Text>
            </View>   
            <View style={styles.starContainer}>
                {Array.from(new Array(rate)).map((_, index, all) => (
                    <FontAwesome 
                        key={index}
                        name={"star"} 
                        size={24}
                        color={theme.colors.Highlight} 
                        style={{
                            ...styles.starFill,
                            ...(index === 0 ? styles.starFillStart :{}),  
                            ...((index + 1) === all.length ? styles.starFillEnd :{})
                            }}
                         />
                         
                 ))}
                 {Array.from(new Array(5 -rate)).map((_, index, all) => ( //estudar estes conteúdo aqui.
                    <FontAwesome 
                        key={index}
                        name={"star-o"} 
                        size={24}
                        color={theme.colors.Highlight} 
                        style={styles.star}
                         />
                         
                 ))}
            </View>
            
            
            <View>
                <Text style={styles.descriptionText}>
                    {description}
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
    star:{
        padding: 4
    },
    starFill:{
        backgroundColor: theme.colors.BackgroundHighlight,
        padding: 4,
    },
    starFillStart:{
        backgroundColor: theme.colors.BackgroundHighlight,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 4,
    },
    starFillEnd:{
        backgroundColor: theme.colors.BackgroundHighlight,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        padding: 4,
    },
     descriptionText:{
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular

    },

})