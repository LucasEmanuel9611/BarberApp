import { StatusBar } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { store } from './src/store';
import theme from './src/theme';

export default function App() {

  return (
    <Provider store={store}>
      <ToastProvider offset={80} >
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ThemeProvider>
      </ToastProvider>
    </Provider>
  );
}

