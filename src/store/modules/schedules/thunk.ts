import { AppThunk } from "src/store";
import { ThunkOptions } from "../../types";
import {
  getSchedules,
  getSchedulesByDay,
  getUserSchedules,
  postCreateSchedule,
} from "./services";
import { ScheduleData, SchedulePayload } from "./types";

export const createScheduleThunk =
  (
    scheduleData: SchedulePayload,
    { onSuccess, onError }: ThunkOptions<ScheduleData, any>
  ): AppThunk =>
  async () => {
    try {
      const data = await postCreateSchedule(scheduleData);
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };

export const getUserSchedulesThunk =
  ({ onSuccess, onError }: ThunkOptions<ScheduleData[], any>): AppThunk =>
  async () => {
    try {
      const data = await getUserSchedules();
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };

export const getSchedulesThunk =
  ({ onSuccess, onError }: ThunkOptions<ScheduleData[], any>): AppThunk =>
  async () => {
    try {
      const data = await getSchedules();
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };

export const getSchedulesByDayThunk =
  (
    date: SchedulePayload,
    { onSuccess, onError }: ThunkOptions<ScheduleData[], any>
  ): AppThunk =>
  async () => {
    try {
      const data = await getSchedulesByDay(date);
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };
