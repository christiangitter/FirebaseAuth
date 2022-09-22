import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {

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

  const handleBack = () => {
    navigation.replace("Login")
  }

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registriert mit:', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.logo} source={require('../assets/Firebase_Logo.png')}></Image>
      <View style={styles.tipTextContainer}>
      <Text style={styles.tipText}>Du bist neu hier? Kein Problem!</Text>
      <Text style={styles.tipText}> Erstelle hier einfach dein kostenloses Konto</Text>
      </View>
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
        <TouchableOpacity onPress={handleSignUp} style={styles.buttonSignup}>
          <Text style={styles.buttonText}>Konto erstellen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBack} style={styles.buttonBack}>
          <Text style={styles.buttonTextBack}>zurück zum Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen

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
  buttonSignup:{
   width:'100%',
   backgroundColor:'lightgreen',
   borderRadius:10,
   padding:12,
   borderColor:'darkgreen',
   borderWidth:1,
   alignItems:'center',
   justifyContent:'center',
  },
  buttonText: {
    color:'darkgreen'
  },
  logo:{
    width:'50%',
    height:60,
    resizeMode:'stretch',
    marginBottom:30
  },
  tipText:{
    color: 'darkgrey',
  },
  tipTextContainer: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBack: {
    width:'100%',
   backgroundColor:'#FFC0B3',
   borderRadius:10,
   padding:12,
   borderColor:'tomato',
   borderWidth:1,
   alignItems:'center',
   justifyContent:'center',
   marginTop: 10
  },
  buttonTextBack: {
    color:'#811900'
  }
})