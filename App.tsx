import { AuthContextProvider } from '@contexts/AuthContext';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';

type UserDates = {
  id: number,
  name: string,
  email: string,
  password: string,
  isAdmin: string,
  createdAt: Date
}

type Scheduling = {
  id: number;
  user_id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: string;
  createdAt: Date;
};

export default function App() {

  return (
    <ToastProvider offset={80} >
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </ToastProvider>
  );
}

