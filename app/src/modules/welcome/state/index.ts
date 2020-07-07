import { createModuleState } from "@faharmony/state";
import { initialState } from "./store";
import * as reducers from "./reducers";

const ModuleId = "welcome";

const ModuleState = createModuleState({
  name: ModuleId,
  initialState,
  reducers,
});

const { actions: ModuleActions } = ModuleState;

export { ModuleState, ModuleActions };
export * from "./store";
