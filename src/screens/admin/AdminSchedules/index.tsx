
import { AdminScheduleList } from "@components/AdminScheduleList";
import { AdminLayout } from "@components/Layout/AdminLayout";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect } from "@react-navigation/native";
import { getSchedulesThunk } from "@store/modules/schedules/thunk";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";

export const AdminSchedules = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useEffect(() => {
        appDispatch(getSchedulesThunk({
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
            }
        }))
    }, [refreshing])

    return (
        <AdminLayout username={user.name}>
            <AdminScheduleList
                schedules={schedules}
                showUserName
                emptyArrayMessage="não há agendamentos"
                refreshing={refreshing}
                onRefresh={() => setRefreshing(true)}
            />
        </AdminLayout>
    )
}