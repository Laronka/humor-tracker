import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { TrouteProps } from "../shared/Routes";

export const Detail = () =>{  

// recebendo parametros
const { params } = useRoute<TrouteProps<'detail'>>();

    return <>
         <Text>Details {params.numero}</Text>
         
    </>
}