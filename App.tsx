import React from 'react';
import { Routes } from './src/routes';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {

  // ! checar se há usuário

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
