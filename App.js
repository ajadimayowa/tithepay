import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';

export default function App() {
  const [signupForm, setSignUpForm] = useState(false)
  const [user, regUser] = useState([])
  const [username, setUsername] = ('')
  const [password, setPassword] = ('')

  function toggleSignupModal() {
    setSignUpForm(!signupForm)
  }

  function catchCredentials(passedUsername, passedPassword) {
    regUser((currentList) => [...currentList, { username: passedUsername, password: passedPassword }])
    console.log('sent from login component')
    console.log(passedUsername)
    console.log(passedPassword)
    console.log(user.map((users) => users.username))

  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <LoginForm toggleSignupModal={toggleSignupModal} catchCredentials={catchCredentials} />
      <SignupForm onModal={signupForm} toggleSignupModal={toggleSignupModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
    width: '100%',

  },
});
