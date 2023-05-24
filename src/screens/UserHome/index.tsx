
import { AddButton } from "@components/AddButton";
import { ScheduleList } from "@components/ScheduleList";
import { useToast } from "react-native-toast-notifications";
import { SchedulingProps } from "src/types/common";
import * as Styled from "./styles";

export const UserHome = () => {
    const schedules: SchedulingProps[] = [
        {
            id: 1,
            user_id: 445,
            status: "APROVADO",
            createdAt: new Date()
        },
        {
            id: 2,
            user_id: 446,
            status: "REPROVADO",
            createdAt: new Date()
        },
        {
            id: 3,
            user_id: 447,
            status: "AGUARDANDO",
            createdAt: new Date()
        },
    ]

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
                    <Styled.WelcomeText>Bem vindo,</Styled.WelcomeText>
                    <Styled.UserName>Lucas Emanuel </Styled.UserName>
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