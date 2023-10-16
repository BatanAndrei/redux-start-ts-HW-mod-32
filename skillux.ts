import { CustomReduxOptions } from "./types";

export function createSkillux<S>(options: CustomReduxOptions<S>) {
  let state = options.state;
  let listeners: Map<string, Function> = new Map();
  let storeReducer = options.reducer;

  function getState() {
    return state;
  }

  function dispatch(action: any) {
    if (!action.type) return;

    state = storeReducer(state, action);

    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(key: string, listener: Function) {
    listeners.set(key, listener);
  }

  function unsubscribe(key: string) {
    listeners.delete(key);
  }

  return {
    getState,
    subscribe,
    unsubscribe,
    dispatch
  };
}

