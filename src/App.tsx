import {  SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { useState } from "react";
import { ScrollView } from 'react-native'


export default function App() {

  // aprendendo use state
  const [list, setList] = useState ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70,90,100,200,300,400,500,600,700
    ,800,900,105,1000,1001,1002,1003,1004, 1007, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 100000
  ]);

  return(
  <SafeAreaView>
  
    {/*
    <ScrollView>
      {
        list.map((item, index) => (<Text key={index}>valor: {item} posição: {index}</Text>))
      }
    </ScrollView>  */}  

    <FlatList
      data={list}
      keyExtractor={(item, index) => item.toString()}
      renderItem={({item, index}) => ( 
      <Text> valor: {item} posição: {index}</Text> )}
    />
    
  
  </SafeAreaView>

  
  );
}