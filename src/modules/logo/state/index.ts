/**
 * State
 * ---
 *
 * This directory contains module state.
 * Harmony uses the Redux-Toolkit setup and
 * treats each Module as a Slice.
 *
 * Use other files like `store.ts` and `reducers.ts`
 * to maintain the functionality of ModuleState.
 * This file is responsible for combining them.
 *
 * There is no need for separately creating or
 * maintaining `actions` as they are generated
 * using slice's case reducers.
 *
 * @readonly No edit required in this file unless
 * ModuleId changes.
 */

import {
  createModuleState,
  createUseModuleStateHook,
  useDispatch,
} from "@faharmony/state";
import initialState, { IModuleState } from "./initialState";
import * as reducers from "./reducers";

const ModuleID = "logo";

/** Create Module's state using wrapper of createSlice(). */
const ModuleState = createModuleState({
  /** name should be exact same as Module ID. */
  name: ModuleID,
  /** Initial value of Module's state. */
  initialState,
  /** Object of case reducers to modify Module's state. */
  reducers,
});

const {
  useModuleState,
  useModuleStateSelector,
} = createUseModuleStateHook<IModuleState>(ModuleID);

// Extract `actions` from Module's state
const { actions: ModuleActions } = ModuleState;
// Export state for Module config and actions for dispatch usage.
export { ModuleState, ModuleActions, useModuleState, useModuleStateSelector };
// Export State type definition
export * from "./initialState";

export { useDispatch };
