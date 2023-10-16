export interface CustomReduxOptions<S = {}> {
    state: S;
    reducer: Function;
  }
  
  export interface State {
    value: number;
  }
  
  export type ReducerAction =
    | {
        type: "SET_NUMBER";
        payload: number;
      }
    | {
        type: "INCREMENT";
      };
  