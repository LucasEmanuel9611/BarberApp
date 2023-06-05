import Button from '@components/Button';
import { Input } from '@components/Input';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import { loginThunk } from '@store/modules/auth/thunk';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useToast } from 'react-native-toast-notifications';
import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes';
import { z } from 'zod';
import * as Styled from "./styles";

const userSchema = z.object({
    email: z.string().email('Insira um e-mail válido').nonempty({ message: 'Preencha o email' }).trim(),
    password: z.string().min(4, { message: 'A senha deve ter no mínimo 4 caracteres' }).trim(),
});

type userFormData = z.infer<typeof userSchema>

export const Login = () => {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<userFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const toast = useToast();
    const dispatch = useAppDispatch();

    const onSubmit = async ({ email, password }: userFormData) => {
        dispatch(
            loginThunk({ email, password }, {
                onError: err => {
                    const errorMessage = err.response.data.message ?? "ao fazer login tente novamente"
                    toast.show(`Erro ${errorMessage.toLowerCase()} `, {
                        type: "danger",
                        placement: "top",
                        duration: 4000,
                        animationType: "slide-in",
                    });
                }
            }))
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
                        <Button onPress={handleSubmit(onSubmit)} isLoading={isSubmitting}>
                            Entrar
                        </Button>
                    </Styled.Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <Styled.CreateAccountButton onPress={() => navigation.navigate('signup')}>
                <Feather name="log-in" size={20} color="#ff9000" />
                <Styled.CreateAccountButtonText>Criar uma conta</Styled.CreateAccountButtonText>
            </Styled.CreateAccountButton>
        </>
    )
}