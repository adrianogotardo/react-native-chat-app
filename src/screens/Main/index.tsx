import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { ButtonText, Container, StyledButton, Title } from './styles'
import { getUser } from '../../storage/user/getUser';
import { getToken } from '../../storage/token/getToken';
import { deleteToken } from '../../storage/token/deleteToken';

interface UserInfo {
  name: string,
  email: string,
  password: string
}

export function MainScreen() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", password: "" });
  const [token, setToken] = useState<string>('')

  async function getStoredUser() {
    const storedToken = await getToken();
    if(storedToken === null) {
      Alert.alert(
        'No token detected', 
        'PLease, login so you can chat with your contacts :)', 
        [{ 
          text: 'OK', 
          onPress: () => navigation.navigate('login') 
        }], 
        { cancelable: false }
      );
    }
    else setToken(storedToken);
    
    // const storedUser = await getUser();
    // if(storedUser === null) {
    //   Alert.alert(
    //     'No user detected', 
    //     'PLease, login so you can chat with your contacts :)', 
    //     [{ 
    //       text: 'OK', 
    //       onPress: () => navigation.navigate('login') 
    //     }], 
    //     { cancelable: false }
    //   );
    // }
    // else setUserInfo(storedUser);
  };

  useFocusEffect(useCallback(() => {
    getStoredUser();
  }, []));

  function handleSubmit() {
    deleteToken();
    navigation.navigate('login')
  }

  return (
    <Container>

      <Title>{`Logged user: ${token}`}</Title>

      <StyledButton onPress={handleSubmit}>
        <ButtonText>Log out</ButtonText>
      </StyledButton>

    </Container>
  );
};
