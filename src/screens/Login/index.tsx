import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Container, StyledInput, Title, ToggleForm, StyledButton, ButtonText } from './styles'
import { api } from '../../services/api';
import { AppError } from '../../utils/AppError';
import { Alert } from 'react-native';
import { createToken } from '../../storage/token/createToken';

export function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  function handleToggleForm() {
    navigation.navigate('signup');
  }

  async function handleSubmit() {
    try {
      const response = await api.post('/signin', { email, password });
      console.log(response.data);
      createToken(response.data.token)
      navigation.navigate('main');
    } catch(error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Couldn't find the account. Please, try again later.";
      console.log(title);
      Alert.alert(title);
    }
  }

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

      <StyledButton onPress={handleSubmit}>
        <ButtonText>Sign in</ButtonText>
      </StyledButton>

      <ToggleForm onPress={handleToggleForm}>
        Doesn't have an account? Sign up!
      </ToggleForm>
      
    </Container>
  );
};
