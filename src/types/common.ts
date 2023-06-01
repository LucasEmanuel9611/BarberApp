export type ScheduleProps = {
  id: string;
  user_id: string;
  username: string;
  status: ScheduleStatusTextProps;
  date: Date;
  created_at: Date;
};

export type ScheduleStatusTextProps = "APROVADO" | "REPROVADO" | "AGUARDANDO";
