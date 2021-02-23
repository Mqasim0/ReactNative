import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight ,Image, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';

import {useDimensions} from '@react-native-community/hooks'

export default function App() {
  console.log(require('./assets/icon.png'));
  console.log(Dimensions.get("screen"))
  console.log(useDimensions())
  return (
    // <View style={styles.container}>
    //    <Text numberOfLines={1} onPress={() => console.log('Text Pressed')}>Hello React Native </Text>
    //    <TouchableHighlight onPress={()=> console.log("Image Tapped")}>
    //    <Image source={{
    //      width: 200,
    //      height: 300,
    //      uri: 'https://picsum.photos/200/200'}}/>

    //    </TouchableHighlight> 
    //    {/* <Image source={require('./assets/icon.png')}/> */}
    //   <StatusBar style="auto" />
    //   <Button color="orange" title="Click Me" onPress={() => Alert.alert("My Title", "My Message", [
    //     { text:"Yes" },
    //     { text: "No" },
    //   ]) }/>

   
    // </View>
    // flex box practices
    <View style={{
      backgroundColor:'#fff',
      flex:1,
      flexDirection:"row", // horizontal
      justifyContent:'center', // main
      alignItems: "center", // secondary axis
      alignContent:'center',
      flexWrap:"wrap",
    }}>
     <View style={{
       backgroundColor:"dodgerblue",
       width: 100,
       height: 100,
       
     }}/>
     <View style={{
       backgroundColor:"tomato",
       width: 100,
       height: 100,
       left:20,
       top:50,
       position:'absolute'
     }}/>
     <View style={{
       backgroundColor:"gold",
       width: 100,
       height: 100,
     }}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
