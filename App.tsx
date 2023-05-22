//import AppNavigator from "./src/navigation/AppNavigator";
import React, { useState } from 'react';
import { Routes } from './src/routes';

export default function App() {
  const [isLogin, setIsLogin] = useState<Boolean>(true);
  // ! checar se há usuário

  return (
    <>
      <Routes />
    </>
  );
}
