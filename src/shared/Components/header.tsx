import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"
import React from "react"

interface IHeaderProps {
    children: React.ReactNode;
}

export const Header = ({children}: IHeaderProps) => {

    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Olá</Text>
            <Text style={styles.headerBoldText}>{children}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    headerContainer: {
        gap: 9,
        padding: 16,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText:{ fontSize: theme.fonts.sizes.title },
    headerBoldText:{
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.primary,
        
    },

})