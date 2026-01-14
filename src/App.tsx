import { MyButton } from "./shared/Components/MyButton";
import {  SafeAreaView } from 'react-native-safe-area-context'
import { Text  } from 'react-native'
import { useState } from "react";

export default function App() {

  // aprendendo use state
  const [state, setState] = useState ('Teste');
  

  console.log("Teste")


  return(
  <SafeAreaView>
  
   <MyButton order={1} onPress={() => setState('Teste2')}>
      <Text>MyButton {state}</Text>
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