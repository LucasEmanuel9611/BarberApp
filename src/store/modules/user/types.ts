export type UserDates = {
  token: string;
  user: {
    name: string;
    email: string;
    isAdmin: string;
    id: string;
  };
};

export type CreateUserPayload = {
  username: string;
  email: string;
  password: string;
};
