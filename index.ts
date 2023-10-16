
import { createSkillux } from "./skillux";
import { State, ReducerAction } from "./types";

function skilluxReducer(state: State, action: ReducerAction) {
  switch (action.type) {
    case "SET_NUMBER": {
      return {
        ...state,
        value: action.payload
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        value: state.value + 1
      };
    }
    default: {
      return state;
    }
  }
}

const skillux = createSkillux<State>({
  state: {
    value: 0
  },
  reducer: skilluxReducer
});

function setHtml() {
  const element = document.getElementById("element");

  const storeState = skillux.getState();

  console.log(storeState);

  if (element) {
    element.innerHTML = storeState.value.toString();
  }
}

document.getElementById("adder")?.addEventListener("click", () => {
  skillux.dispatch({
    type: "INCREMENT"
  });
});

document.getElementById("stop")?.addEventListener("click", () => {
  skillux.unsubscribe("setHtml");
});

skillux.subscribe("setHtml", setHtml);
