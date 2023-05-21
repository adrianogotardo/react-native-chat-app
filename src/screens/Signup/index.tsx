import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles'

// interface Props {
//   isLogin: Boolean,
//   setIsLogin: React.Dispatch<React.SetStateAction<Boolean>>
// }

export function SignupScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const navigation = useNavigation();

  const handleToggleForm = () => {
    navigation.navigate("login");
  };

  const handleSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title={'Sign up'} onPress={handleSubmit} />
      <Text style={styles.toggleForm} onPress={handleToggleForm}>
        Already have an account? Sign in!
      </Text>
    </View>
  );
};
