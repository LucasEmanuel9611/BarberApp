import { ScheduleStatusTextProps } from "src/types/common";
import { useTheme } from "styled-components";
import * as Styled from "./styles";

type ScheduleStatusProps = {
    status: ScheduleStatusTextProps
}

export const ScheduleStatus = ({ status }: ScheduleStatusProps) => {
    const { COLORS } = useTheme();

    const textColor = (status: string) => {
        if (status === "APROVADO") {
            return COLORS.GREEN
        } else if (status === "REPROVADO") {
            return COLORS.RED_200
        } else {
            return COLORS.ORANGE_100
        }
    }

    return (
        <Styled.CustomText color={textColor(status)} >
            {status}
        </Styled.CustomText>
    )
}


