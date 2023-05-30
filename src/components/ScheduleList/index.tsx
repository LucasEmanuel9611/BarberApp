import { ScheduleCard } from '@components/ScheduleCard';
import { ScheduleProps } from 'src/types/common';
import * as Styled from './styles';

type ScheduleListProps = {
    schedules?: ScheduleProps[] | undefined
}

export const ScheduleList = ({ schedules }: ScheduleListProps) => {
    return (
        <>
            {
                schedules && schedules.length > 1 ?
                    <Styled.CardArea>
                        {schedules?.map((schedule) => (
                            <ScheduleCard {...schedule} key={schedule.id} />
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