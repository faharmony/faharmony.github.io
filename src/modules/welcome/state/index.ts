import {
  createModuleState,
  createUseModuleStateHook,
  useDispatch,
} from "@faharmony/state";
import { initialState, IState } from "./store";
import * as reducers from "./reducers";

const ModuleId = "welcome";

const ModuleState = createModuleState({
  name: ModuleId,
  initialState,
  reducers,
});

const { actions: ModuleActions } = ModuleState;

const {
  useModuleState,
  useModuleStateSelector,
} = createUseModuleStateHook<IState>(ModuleId);
export { useDispatch };
export { ModuleState, ModuleActions, useModuleState, useModuleStateSelector };
export * from "./store";
