import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, onPress, FlatList, ScrollView, StyleSheet, Button, ImageBackground } from 'react-native';
// import { useState,state } from 'react/cjs/react.production.min';
// import { Children } from 'react/cjs/react.development'


function App() {

  const [next, setNext] = useState()



  return (   

    <View style={{ flex: 1 }}>
       {/* <ScrollView> */}     
       
        <View style={styles.body}>

          <ImageBackground source={{uri:("https://images.pexels.com/photos/5417094/pexels-photo-5417094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")}} >
          <ScrollView>

          <Image source={require('../assets/school.jpg')} style={styles.image} />

          <Text style={styles.heading}>  Welcome To School Management App</Text>

          <Text style={styles.paragraph}>Here  We  provide  all  information  related  to  student, their  due  fees, their  examination  fees, their  sports  fees  and  etc </Text>

          <View style={styles.btn} >

            {/* <Button title='Next page' onPress={() => setNext("next")} /> */}

          </View>

          <Image source={require('../assets/school.jpg')} style={styles.image} />

<Text style={styles.heading}>  Welcome To School Management App</Text>

<Text style={styles.paragraph}>Here  We  provide  all  information  related  to  student, their  due  fees, their  examination  fees, their  sports  fees  and  etc </Text>

<View style={styles.btn} >

  {/* <Button title='Next page' onPress={() => setNext("next")} /> */}

</View>
</ScrollView>

</ImageBackground>
          

        </View>
      


      </View>
  


  )
};

const styles = StyleSheet.create({
  Container: {
    flex: 2,
    backgroundColor: "#40b1ed",
    width: "100%",
    // height: 60,
    alignItems: 'center',
    justifyContent: 'center',



  },

  body: {
    flex: 25,
    width: "100%",
    backgroundColor: "red"
  },

  image: {

    width: "80%",
    height: 200,
    borderRadius: 30,
    marginLeft: 43,
    marginTop: 50,
    marginBottom: 50,
  },

  heading: {
    width: "100%",
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

  paragraph: {
    width: "100%",
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,

  },

  btn: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App  