// navigation.d.ts

import { RootStackParamList } from "./routes/user.route";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
