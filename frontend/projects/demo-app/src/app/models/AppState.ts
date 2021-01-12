import { UserLibState } from "@t4d-wnow/user-lib";

export interface AppState {
  errorMessage: string;
  user: UserLibState,
}