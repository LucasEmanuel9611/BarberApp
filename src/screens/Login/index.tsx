import Button from '@components/Button';
import { Input } from '@components/Input';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import * as Styled from "./styles";

export const Login = () => {
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
                            isErrored={false}
                            isFocused={false}
                        />

                        <Input
                            secureTextEntry
                            placeholder="Senha"
                            returnKeyType="send"
                            name='senha'
                            icon='lock'
                            isErrored={false}
                            isFocused={false}
                        />

                        <Button>
                            Entrar
                        </Button>
                    </Styled.Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <Styled.CreateAccountButton onPress={() => { console.warn("teste") }}>
                <Feather name="log-in" size={20} color="#ff9000" />
                <Styled.CreateAccountButtonText>Criar uma conta</Styled.CreateAccountButtonText>
            </Styled.CreateAccountButton>
        </>
    )
}