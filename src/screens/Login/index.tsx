import Button from '@components/Button';
import { Input } from '@components/Input';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useAuth } from '../../hooks/useAuth';
import * as Styled from "./styles";

export const Login = () => {
    const { handleSetAuthenticated } = useAuth();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const handleSign = () => {
        if (email === 'admin' && password === 'admin') {
            handleSetAuthenticated(true)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Styled.Container>
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Styled.Title>Login</Styled.Title>
                        </View>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="E-mail"
                            returnKeyType="next"
                            icon='mail'
                            name='email'
                            isErrored={error}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <Input
                            secureTextEntry
                            placeholder="Senha"
                            returnKeyType="send"
                            name='senha'
                            icon='lock'
                            isErrored={error}
                            onChangeText={(text) => setPassword(text)}
                        />

                        <Button onPress={handleSign}>
                            Entrar
                        </Button>
                    </Styled.Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <Styled.CreateAccountButton onPress={() => console.warn('funcionalidade em desenvolvimento')}>
                <Feather name="log-in" size={20} color="#ff9000" />
                <Styled.CreateAccountButtonText>Criar uma conta</Styled.CreateAccountButtonText>
            </Styled.CreateAccountButton>
        </>
    )
}