import { MyButton } from "./shared/Components/MyButton";
import {  SafeAreaView } from 'react-native-safe-area-context'
import { Text  } from 'react-native'

export default function App() {
  return(
  <SafeAreaView>
  
   <MyButton order={1} onPress={() => console.log('teste')}>
      <Text>MyButton {1}</Text>
   </MyButton>

   <MyButton order={2} onPress={() => console.log('teste')}>
      <Text>MyButton {2}</Text>
    </MyButton>

   <MyButton order={3} onPress={() => console.log('teste')}>
      <Text>MyButton {3}</Text>
    </MyButton>

   <MyButton order={4} onPress={() => console.log('teste')}>
      <Text>MyButton {4}</Text>
    </MyButton>
  
  </SafeAreaView>
  );
}