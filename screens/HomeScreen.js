import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
     .signOut()
     .then(() => {
      navigation.replace("Login")
     })
     .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Hallo</Text>
     <Text>{ auth.currentUser?.email }</Text>
     <TouchableOpacity onPress={handleSignOut} style={styles.button}>
      <Text style={styles.buttonText}>Abmelden</Text>
     </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  button: {
    width:'70%',
    backgroundColor:'#FFC0B3',
    borderRadius:10,
    padding:12,
    borderColor:'tomato',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 20,
  },
  buttonText: {
    color:'#811900'
  }
})