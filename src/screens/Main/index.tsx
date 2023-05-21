import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Main: undefined;
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface MainScreenProps {
  navigation: MainScreenNavigationProp;
}

export function MainScreen({ navigation }: MainScreenProps) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <Text>Logue-se</Text>
    </TouchableOpacity>
  );
};

