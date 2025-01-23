import { Settings } from "@interfaces/settings";
import { User } from "@interfaces/user";

export interface AppState {
  me: User;
  users: User[],
  settings: Settings
}
