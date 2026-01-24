import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text  } from 'react-native'
import { TrouteProps } from '../shared/Routes';

export const SetUsername = () =>{

const {params} = useRoute<TrouteProps<'setusername'>>();

    return <>
        <Text>SetUsername</Text>    
    </>;
}