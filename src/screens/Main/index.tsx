import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-native';
import { Container, Title } from './styles'
import { getUser } from '../../storage/user/getUser';

interface UserInfo {
  name: string,
  email: string,
  password: string
}

export function MainScreen() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", password: "" });
  console.log("ola");

  async function getStoredUser() {
    const storedUser = await getUser();
    if(storedUser === null) navigation.navigate('login');
    else setUserInfo(storedUser);
  };

  // * useFocusEffect is better in this case cause we need to check locally for the user everytime this screen is on
  // useEffect(() => {
  //   getStoredUser();
  // }, []);

  useFocusEffect(useCallback(() => {
    getStoredUser();
  }, []));

  function handleSubmit() {
  }

  return (
    <Container>

      <Title>{`Logged user: ${userInfo.name}`}</Title>

      <Button title={'Log out'} onPress={handleSubmit} />

    </Container>
  );
};
