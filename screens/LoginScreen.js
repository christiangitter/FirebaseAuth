import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.replace("Home")
      }
     })

     return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registriert mit:', user.email);
    })
    .catch(error => alert(error.message))
  }

const handleLogin = () => {
   auth
   .signInWithEmailAndPassword(email, password)
   .then(userCredentials => {
    const user = userCredentials.user;
    console.log('Angemeldet mit:', user.email);
  })
  .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require('../assets/Firebase_Logo.png')}></Image>
      <View style={styles.inputContainer}>
        <TextInput placeholder='E-Mail' 
         value={email} 
        onChangeText={text => setEmail(text)} 
        style={styles.input}>
        </TextInput>
        <TextInput placeholder='Passwort' 
         value={password} 
        onChangeText={text => setPassword(text)} 
        style={styles.input}
        secureTextEntry>
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.accountText}>Du hast noch keinen Account?</Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.buttonRegister}>
          <Text style={styles.buttonTextRegister}>Anmelden</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingTop:150,
  },
  inputContainer:{
    width:'80%',

  },
  buttonContainer:{
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:8,

  },
  input:{
    backgroundColor:'white',
    padding:12,
    marginBottom:5,
    borderRadius:10,

  },
  buttonLogin:{
   width:'100%',
   backgroundColor:'lightgreen',
   borderRadius:10,
   padding:12,
   borderColor:'darkgreen',
   borderWidth:1,
   alignItems:'center',
   justifyContent:'center',
  },
  buttonRegister:{
    width:'100%',
    backgroundColor:'#FFC0B3',
    borderRadius:10,
    padding:12,
    borderColor:'tomato',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    

  },
  buttonText: {
    color:'darkgreen'
  },
  buttonTextRegister: {
    color:'#811900'
  },
  accountText:{
    marginTop:20,
    marginBottom:5,
    color:'darkgrey',
    fontSize:12,
  },
  logo:{
    width:'50%',
    height:60,
    resizeMode:'stretch',
    marginBottom:30
  }
})