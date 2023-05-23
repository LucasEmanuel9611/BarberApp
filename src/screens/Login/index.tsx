import Button from '@components/Button';
import { Input } from '@components/Input';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@libs/axios';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from 'src/hooks/useAuth';
import { z } from 'zod';
import * as Styled from "./styles";


const userSchema = z.object({
    email: z.string().email('Insira um e-mail válido').nonempty({ message: 'Preencha o email' }),
    password: z.string().min(4, { message: 'A senha deve ter no mínimo 4 caracteres' }),
});

type userFormData = z.infer<typeof userSchema>

export const Login = () => {
    const { handleSetAuthenticated } = useAuth()

    const { control, handleSubmit, formState: { errors } } = useForm<userFormData>({
        resolver: zodResolver(userSchema)
    })

    const toast = useToast();

    const onSubmit = ({ email, password }: userFormData) => {

        api.post("/sessions", { email, password })
            .then(() => {
                handleSetAuthenticated(true)
            })
            .catch((error) => {
                toast.show("Erro" + error.message, {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
            })
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
                        <Controller
                            control={control}
                            name="email"
                            rules={{ required: 'Informe o e-mail ' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    placeholder="E-mail"
                                    returnKeyType="next"
                                    icon='mail'
                                    name='email'
                                    errorMessage={errors.email?.message}
                                    isErrored={Boolean(errors.email)}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'Informe a senha' }}
                            render={({ field: { onChange } }) => (

                                <Input
                                    secureTextEntry
                                    placeholder="Senha"
                                    returnKeyType="send"
                                    name='senha'
                                    icon='lock'
                                    isErrored={Boolean(errors.password?.message)}
                                    errorMessage={errors.password?.message}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Button onPress={handleSubmit(onSubmit)}>
                            Entrar
                        </Button>
                    </Styled.Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <Styled.CreateAccountButton onPress={() => console.warn("em dev")}>
                <Feather name="log-in" size={20} color="#ff9000" />
                <Styled.CreateAccountButtonText>Criar uma conta</Styled.CreateAccountButtonText>
            </Styled.CreateAccountButton>
        </>
    )
}