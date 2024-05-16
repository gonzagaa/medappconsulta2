// navigation.d.ts

import { RootStackParamList } from "./routes/app.route";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
