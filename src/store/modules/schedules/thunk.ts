import { AppThunk } from "src/store";
import { ThunkOptions } from "../../types";
import {
  deleteSchedule,
  getSchedules,
  getSchedulesByDay,
  getUserSchedules,
  patchApproveSchedule,
  patchEditSchedule,
  patchReproveSchedule,
  postCreateSchedule,
} from "./services";
import { ScheduleData, SchedulePayload, editSchedulePayload } from "./types";

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

export const editScheduleThunk =
  (
    editScheduleDate: editSchedulePayload,
    { onSuccess, onError }: ThunkOptions<ScheduleData, any>
  ): AppThunk =>
    async () => {
      try {
        const data = await patchEditSchedule(editScheduleDate);
        onSuccess && onSuccess(data);
      } catch (error) {
        onError && onError(error);
      }
    };

export const deleteScheduleThunk =
  (
    id: string,
    { onSuccess, onError }: ThunkOptions<ScheduleData, any>
  ): AppThunk =>
    async () => {
      try {
        const data = await deleteSchedule(id);
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
    date: string,
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

export const patchApproveScheduleThunk =
  (
    id: string,
    { onSuccess, onError }: ThunkOptions<ScheduleData, any>
  ): AppThunk =>
    async () => {
      try {
        const data = await patchApproveSchedule(id);
        onSuccess && onSuccess(data);
      } catch (error) {
        onError && onError(error);
      }
    };

export const patchReproveScheduleThunk =
  (
    id: string,
    { onSuccess, onError }: ThunkOptions<ScheduleData, any>
  ): AppThunk =>
    async () => {
      try {
        const data = await patchReproveSchedule(id);
        onSuccess && onSuccess(data);
      } catch (error) {
        onError && onError(error);
      }
    };
