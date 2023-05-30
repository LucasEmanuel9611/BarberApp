import { ScheduleCard } from '@components/ScheduleCard';
import { ScheduleProps } from 'src/types/common';
import * as Styled from './styles';

type ScheduleListProps = {
    schedules?: ScheduleProps[] | undefined
    showUserName?: boolean
}

export const ScheduleList = ({ schedules, showUserName }: ScheduleListProps) => {
    return (
        <>
            {
                schedules && schedules.length > 0 ?
                    <Styled.CardArea>
                        {schedules?.map((schedule) => (
                            <ScheduleCard {...schedule} key={schedule.id} showUserName={showUserName} />
                        ))}
                    </Styled.CardArea>
                    :
                    <Styled.Container>
                        <Styled.TreatmentText> Não há agendamentos </Styled.TreatmentText>
                    </Styled.Container>
            }
        </>
    )
}