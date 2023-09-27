import Button from '@components/Button';
import { Input } from '@components/Input';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import { createUserAndLoginThunk } from '@store/modules/user/thunk';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useToast } from 'react-native-toast-notifications';
import { z } from 'zod';
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';
import * as Styled from "./styles";

const userSchema = z.object({
    email: z.string().email('Insira um e-mail válido'),
    password: z.string().min(4, { message: 'A senha deve ter no mínimo 4 caracteres' }),
    username: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
});

type userFormData = z.infer<typeof userSchema>

export const Signup = () => {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<userFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
            username: ''
        }
    })

    const toast = useToast();
    const dispatch = useAppDispatch();

    const onSubmit = async ({ email, password, username }: userFormData) => {
        dispatch(
            createUserAndLoginThunk({ username, email, password }, {
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
                            <Styled.Title>Cadastro</Styled.Title>
                        </View>
                        <Controller
                            control={control}
                            name="username"
                            render={({ field: { onChange } }) => (
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    placeholder="Nome"
                                    returnKeyType="next"
                                    icon='user'
                                    name='username'
                                    errorMessage={errors.username?.message}
                                    isErrored={Boolean(errors.username)}
                                    onChangeText={onChange}
                                />
                            )}
                        />
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
                            Cadastrar-se
                        </Button>
                    </Styled.Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <Styled.ButtonContainer>
                <Styled.CreateAccountButton activeOpacity={0.7} onPress={() => navigation.navigate('login')}>
                    <Feather name="log-in" size={20} color="#ff9000" />
                    <Styled.CreateAccountButtonText>Entrar </Styled.CreateAccountButtonText>
                </Styled.CreateAccountButton>
            </Styled.ButtonContainer>
        </>
    )
}