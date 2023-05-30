import api from "@libs/axios";
import { ScheduleData, SchedulePayload } from "./types";

export const postCreateSchedule = async (
  scheduleData: SchedulePayload
): Promise<ScheduleData> => {
  return api.post("/schedules", scheduleData).then((response) => response.data);
};

export const getUserSchedules = async (): Promise<ScheduleData[]> => {
  return api.get("/schedules/user/list").then((response) => response.data);
};

export const getSchedules = async (): Promise<ScheduleData[]> => {
  return api.get("/schedules/list").then((response) => response.data);
};

export const getSchedulesByDay = async (
  date: SchedulePayload
): Promise<ScheduleData[]> => {
  return api.get("/schedules/list/day", date).then((response) => response.data);
};
