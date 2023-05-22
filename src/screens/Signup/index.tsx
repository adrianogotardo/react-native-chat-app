import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { Container, StyledInput, Title, ToggleForm } from './styles'
import { api } from '../../services/api';
import axios from 'axios';
import { AppError } from '../../utils/AppError';
import { useToast } from 'native-base';

export function SignupScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigation = useNavigation();
  const toast = useToast();

  function handleToggleForm() {
    navigation.navigate('login');
  };

  async function handleSubmit() {
    try {
      const response = await api.post('/signup', { name, email, password });
      console.log(response.data);
    } catch(error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Couldn't create the account. Please, try again later.";
      console.log(title);
      // ! cannot make any toast error work... let's just use alert for now
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      });
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

      <Button title={'Sign up'} onPress={handleSubmit} />

      <ToggleForm onPress={handleToggleForm}>
        Already have an account? Sign in!
      </ToggleForm>

    </Container>
  );
};
