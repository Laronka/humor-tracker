import { MyButton } from "./shared/Components/MyButton";
import {  SafeAreaView } from 'react-native-safe-area-context'
import { Text, TouchableOpacity } from 'react-native'
import { useState } from "react";

export default function App() {

  // aprendendo use state
  const [hide, setHide] = useState (false);


  return(
  <SafeAreaView>

    {hide ? <Text>Apareceu</Text> : <Text>Sumiu</Text> }
  
    <TouchableOpacity onPress = {() => setHide(!hide)} >
      <Text>Toggle</Text>
    </TouchableOpacity>
  
  </SafeAreaView>

  
  );
}