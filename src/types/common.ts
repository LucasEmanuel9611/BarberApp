export type SchedulingProps = {
  id: number;
  user_id: number;
  status: ScheduleStatusTextProps;
  createdAt: Date;
};

type UserDates = {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: string;
  createdAt: Date;
};

export type ScheduleStatusTextProps = "APROVADO" | "REPROVADO" | "AGUARDANDO";
