//import AppNavigator from "./src/navigation/AppNavigator";
import React, { useState } from 'react';
import { Routes } from './src/routes';
import { LoginScreen } from './src/screens/Login';
import { SignupScreen } from './src/screens/Signup';

export default function App() {
  const [isLogin, setIsLogin] = useState<Boolean>(true);

  return (
    <>
      <Routes />
    </>
  );
}
