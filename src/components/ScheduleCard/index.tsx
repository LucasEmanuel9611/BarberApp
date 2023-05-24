import { ScheduleStatus } from "@components/StatusText"
import dayjs from "dayjs"
import { SchedulingProps } from "src/types/common"
import * as Styled from "./styles"

type ScheduleCardProps = SchedulingProps

export const ScheduleCard = ({ createdAt, status }: ScheduleCardProps) => {
    return (
        <Styled.Container>
            <Styled.StatusSideContainer>
                <ScheduleStatus status={status} >
                    {status.toLowerCase()}
                </ScheduleStatus>
            </Styled.StatusSideContainer>
            <Styled.DateContainer>
                <Styled.DateText>{dayjs(createdAt).format("D/MM/YYYY")} </Styled.DateText>
                <Styled.DateText>{dayjs(createdAt).format("HH:mm")} </Styled.DateText>
            </Styled.DateContainer>
        </Styled.Container>
    )
}