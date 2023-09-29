
import { FloatAddButton } from "@components/FloatAddButton";
import { UserLayout } from "@components/Layout/UserLayout";
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserNavigatorRoutesProps } from "@routes/user.routes";
import { getUserSchedulesThunk } from "@store/modules/schedules/thunk";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import * as Styled from "./styles";

export const UserHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const navigation = useNavigation<UserNavigatorRoutesProps>();

    const handleCreateSchedulePage = () => {
        navigation.navigate("createSchedule")
    }

    useEffect(() => {
        appDispatch(getUserSchedulesThunk({
            onSuccess: (data) => {
                setSchedules(data)
                setRefreshing(false)
            },
            onError: (error) => {
                const errorMessage = error.response.data.message ?? "tente novamente"
                toast.show(`Erro ${errorMessage.toLowerCase()}`, {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
                setRefreshing(false)
            }
        }))
    }, [refreshing])

    return (
        <UserLayout username={user.name}>
            <Styled.ListContainer>
                <ScheduleList
                    schedules={schedules}
                    emptyArrayMessage="Você não possui agendamentos"
                    refreshing={refreshing}
                    onRefresh={() => setRefreshing(true)}
                />
            </Styled.ListContainer>
            <FloatAddButton onPress={handleCreateSchedulePage} />
        </UserLayout>
    )
}