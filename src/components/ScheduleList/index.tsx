import { ScheduleCard } from '@components/ScheduleCard';
import { SchedulingProps } from 'src/types/common';
import * as Styled from './styles';

type ScheduleListProps = {
    schedules?: SchedulingProps[] | undefined
}

export const ScheduleList = ({ schedules }: ScheduleListProps) => {
    return (
        <>
            {
                schedules ?
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