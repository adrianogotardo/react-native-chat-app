import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles'

// interface Props {
//   isLogin: Boolean,
//   setIsLogin: React.Dispatch<React.SetStateAction<Boolean>>
// }

export function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleToggleForm = () => {
    navigation.navigate("signup");
  };

  const handleSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
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
      <Button title={'Sign in'} onPress={handleSubmit} />
      <Text style={styles.toggleForm} onPress={handleToggleForm}>
        Doesn't have an account? Sign up!
      </Text>
    </View>
  );
};
