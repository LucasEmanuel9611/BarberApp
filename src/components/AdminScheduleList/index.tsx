import { AdminScheduleCard } from '@components/AdminScheduleCard';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { patchApproveScheduleThunk, patchReproveScheduleThunk } from '@store/modules/schedules/thunk';
import { FlatList, View } from 'react-native';
import { ScheduleProps } from 'src/types/common';
import * as Styled from './styles';

type AdminScheduleListProps = {
    schedules?: ScheduleProps[] | undefined
    emptyArrayMessage: string
    showUserName?: boolean
    onRefresh: () => void
    refreshing: boolean
}

export const AdminScheduleList = ({
    schedules,
    showUserName,
    emptyArrayMessage,
    onRefresh,
    refreshing
}: AdminScheduleListProps) => {

    const appDispatch = useAppDispatch();

    const handleRightButton = (id: string) => {
        appDispatch(
            patchApproveScheduleThunk(
                id,
                {
                    onSuccess: () => {
                        onRefresh()
                    },
                    onError: () => {

                    }
                }
            )
        )
    }

    const handleLeftButton = (id: string) => {
        appDispatch(
            patchReproveScheduleThunk(
                id, {
                onSuccess: () => {
                    onRefresh()
                },
                onError: (err) => {
                    console.log(err)
                }
            }
            )
        )
    }

    const renderItem = ({ item }: { item: ScheduleProps }) => {
        return (
            <View style={{ flex: 1, paddingBottom: 8 }}>
                <AdminScheduleCard
                    {...item}
                    key={item.id}
                    showUserName={showUserName}
                    rightAction={() => handleRightButton(item.id)}
                    leftAction={() => handleLeftButton(item.id)}
                />
            </View>
        );
    };

    return (
        <>
            {
                schedules && schedules.length > 0 ?
                    <Styled.CardArea>
                        <FlatList
                            data={schedules}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            extraData={refreshing}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    </Styled.CardArea>
                    :
                    <Styled.Container>
                        <Styled.TreatmentText> {emptyArrayMessage} </Styled.TreatmentText>
                    </Styled.Container>
            }
        </>
    )
}