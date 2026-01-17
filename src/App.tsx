import {  SafeAreaView } from 'react-native-safe-area-context'
import { View, FlatList, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useState } from "react";
import { ScrollView } from 'react-native'


export default function App() {

  // aprendendo use state
  const [list, setList] = useState ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);

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

  <View style={styles.container}>
    <Pressable style={({pressed}) => pressed ? styles.buttonPressed : styles.button}>
      <Text style={styles.buttonText}>Press me</Text>

    </Pressable>
  </View> 
  
  </SafeAreaView>

  
  );
}

const styles =  StyleSheet.create({
  button:{ 
    backgroundColor: 'red',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonPressed: {
    backgroundColor: 'blue',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  container: {
    margin: 16,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }

});