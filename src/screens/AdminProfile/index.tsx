import { AdminLayout } from "@components/Layout/AdminLayout";
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { authActions } from "@store/modules/auth/slice";
import { userActions } from "@store/modules/user/slice";
import { useToast } from "react-native-toast-notifications";
import * as Styled from "./styles";

export const AdminProfile = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch()

    const handleEditUser = () => {
        toast.show("Funcionalidade em desenvolvimento", {
            type: "warning",
            placement: "bottom",
            duration: 4000,
            animationType: "slide-in",
        });
    }

    const constHandleLogout = () => {
        appDispatch(userActions.clearUserData());
        appDispatch(authActions.clearAuthData());
    }

    return (
        <AdminLayout username={user.name}>
            <Styled.InfoCard onPress={handleEditUser}>
                <Styled.CardTitle>Editar Dados</Styled.CardTitle>
                <Entypo name="edit" size={24} color="white" />
            </Styled.InfoCard>

            <Styled.InfoCard onPress={constHandleLogout}>
                <Styled.CardTitle>Deslogar</Styled.CardTitle>
                <Entypo name="arrow-with-circle-right" size={24} color="white" />
            </Styled.InfoCard>
        </AdminLayout>
    )
}