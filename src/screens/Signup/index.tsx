import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Container, StyledInput, Title, ToggleForm } from './styles'

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
    <Container>

      <Title>Sign up</Title>

      <StyledInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

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

      <Button title={'Sign up'} onPress={handleSubmit} />

      <ToggleForm onPress={handleToggleForm}>
        Already have an account? Sign in!
      </ToggleForm>

    </Container>
  );
};
