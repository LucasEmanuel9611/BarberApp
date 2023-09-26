import { ScheduleProps } from "src/types/common";

export type SchedulePayload = {
  date: Date;
};

export type editSchedulePayload = {
  id: string;
  date: string;
}

export type ScheduleData = ScheduleProps;
