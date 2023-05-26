
import { AddButton } from "@components/AddButton";
import { ScheduleList } from "@components/ScheduleList";
import { useAppSelector } from "@hooks/useAppSelector";
import { useToast } from "react-native-toast-notifications";
import * as Styled from "./styles";

export const UserHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();

    const test = () => {
        toast.show("Funcionalidade em desenvolvimento ", {
            type: "warning",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
        });
    }

    return (
        <Styled.Container>
            <Styled.UserContent>
                <Styled.UserNameContainer>
                    <Styled.WelcomeText>Bem vindo, </Styled.WelcomeText>
                    <Styled.UserName>{user.name} </Styled.UserName>
                </Styled.UserNameContainer>
                <Styled.UserAvatar
                    source={{ uri: "https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" }}
                />
            </Styled.UserContent>
            <ScheduleList />
            <AddButton onPress={test} />
        </Styled.Container>
    )
}