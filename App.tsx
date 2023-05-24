import { AuthContextProvider } from '@contexts/AuthContext';
import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';

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

