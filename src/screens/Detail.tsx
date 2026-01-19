import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text } from "react-native";

export const Detail = () =>{
const navigation = useNavigation();  

// recebendo parametros
const { params } = useRoute<any>()

    return <>
         <Text>Details {params.id}</Text>
         
    </>
}