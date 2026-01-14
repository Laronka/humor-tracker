import { Text, TouchableOpacity, View } from 'react-native'



interface IMyButtonProps{
    order: number;
    children: React.ReactNode;
    onPress: () => void;
}

export const MyButton = (props: IMyButtonProps) => {

    console.log("Teste");

return (

<TouchableOpacity onPress={props.onPress}>
  <View>
      {props.children}
  </View>
</TouchableOpacity>
);
}