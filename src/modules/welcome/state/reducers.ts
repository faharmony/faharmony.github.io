import { CaseReducer, PayloadAction } from "@faharmony/state";
import { addToast } from "@faharmony/core";
import { uuid } from "@faharmony/helpers";
import { IState } from "./store";

type Reducer = CaseReducer<IState>;
type ReducerWithPayload<T extends any> = CaseReducer<IState, PayloadAction<T>>;

const startLoading: Reducer = (state) => {
  state.loading = true;
  addToast({ id: uuid(), title: "start loading" });
};

const stopLoading: Reducer = (state) => {
  state.loading = false;
  addToast({ id: uuid(), title: "stop loading" });
};

const setLoading: ReducerWithPayload<boolean> = (state, { payload }) => {
  state.loading = payload;
};

export { startLoading, stopLoading, setLoading };
