import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Container, StyledInput, Title, ToggleForm } from './styles'

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
    <Container>

      <Title>Sign in</Title>

      <StyledInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <StyledInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title={'Sign in'} onPress={handleSubmit} />

      <ToggleForm onPress={handleToggleForm}>
        Doesn't have an account? Sign up!
      </ToggleForm>
      
    </Container>
  );
};
