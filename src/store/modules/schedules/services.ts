import api from "@libs/axios";
import { ScheduleData, SchedulePayload, editSchedulePayload } from "./types";

export const postCreateSchedule = async (
  scheduleData: SchedulePayload
): Promise<ScheduleData> => {
  return api.post("/schedules", scheduleData).then((response) => {
    return response.data;
  });
};

export const deleteSchedule = async (id: string): Promise<ScheduleData> =>
  api.delete(`/schedules/${id}`).then((response) => response.data);

export const getUserSchedules = async (): Promise<ScheduleData[]> => {
  return api.get("/schedules/user/list").then((response) => response.data);
};

export const getSchedules = async (): Promise<ScheduleData[]> => {
  return api.get("/schedules/list").then((response) => response.data);
};

export const getSchedulesByDay = async (
  date: string
): Promise<ScheduleData[]> =>
  api
    .get(`/schedules/list/day`, {
      params: {
        date: date,
      },
    })
    .then((response) => {
      return response.data;
    });

export const patchApproveSchedule = async (
  id: string
): Promise<ScheduleData> => {
  return api
    .patch(`/schedules/approve/${id}`)
    .then((response) => response.data);
};

export const patchReproveSchedule = async (id: string): Promise<ScheduleData> =>
  api.patch(`/schedules/reprove/${id}`).then((response) => response.data);

export const patchEditSchedule = async ({ date, id }: editSchedulePayload): Promise<ScheduleData> =>
  api.patch(`/schedules/edit/${id}`, { date }).then((response) => response.data);
