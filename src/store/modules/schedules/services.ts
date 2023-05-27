import api from "@libs/axios";
import { ScheduleData, SchedulePayload } from "./types";

export const postCreateSchedule = async (
  scheduleData: SchedulePayload
): Promise<ScheduleData> => {
  return api.post("/schedules", scheduleData).then((response) => response.data);
};

export const getUserSchedules = async (): Promise<ScheduleData[]> => {
  return api.get("/schedules/list").then((response) => response.data);
};