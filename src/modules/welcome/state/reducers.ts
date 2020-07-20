import { CaseReducer, PayloadAction } from "@faharmony/state";
import { IState } from "./store";

type Reducer = CaseReducer<IState>;
type ReducerWithPayload<T extends any> = CaseReducer<IState, PayloadAction<T>>;

const startLoading: Reducer = (state) => {
  state.loading = true;
};

const stopLoading: Reducer = (state) => {
  state.loading = false;
};

const setLoading: ReducerWithPayload<boolean> = (state, { payload }) => {
  state.loading = payload;
};

export { startLoading, stopLoading, setLoading };
