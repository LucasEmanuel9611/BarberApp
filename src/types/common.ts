export type SchedulingProps = {
  id: number;
  user_id: number;
  status: ScheduleStatusTextProps;
  createdAt: Date;
};
export type ScheduleStatusTextProps = "APROVADO" | "REPROVADO" | "AGUARDANDO";
