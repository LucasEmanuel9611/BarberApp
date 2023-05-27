
import { AddButton } from "@components/AddButton";
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { getUserSchedulesThunk } from "@store/modules/schedules/thunk";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import * as Styled from "./styles";

export const UserHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

    const test = () => {
        toast.show("Funcionalidade em desenvolvimento ", {
            type: "warning",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
        });
    }

    useEffect(() => {
        appDispatch(getUserSchedulesThunk({
            onSuccess: (data) => {
                console.log(data)
                setSchedules(data)
            }
        }))
    }, [])

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
            <ScheduleList schedules={schedules} />
            <AddButton onPress={test} />
        </Styled.Container>
    )
}