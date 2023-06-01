import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ButtonText, Container, StyledButton, StyledInput, Title, ToggleForm } from './styles'
import { api } from '../../services/api';
import { AppError } from '../../utils/AppError';

export function SignupScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigation = useNavigation();

  function handleToggleForm() {
    navigation.navigate('login');
  };

  async function handleSubmit() {
    try {
      const response = await api.post('/signup', { name, email, password });
      console.log(response.data);
      navigation.navigate('login');
    } catch(error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Couldn't create the account. Please, try again later.";
      console.log(title);
      Alert.alert(title);
    }
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

      <StyledInput
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <StyledButton onPress={handleSubmit}>
        <ButtonText>Sign in</ButtonText>
      </StyledButton>

      <ToggleForm onPress={handleToggleForm}>
        Already have an account? Sign in!
      </ToggleForm>

    </Container>
  );
};
