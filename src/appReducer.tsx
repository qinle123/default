import React, { useReducer } from 'react';
import { noop } from './utils/common';

interface ActionType {
  type: string;
  payload: any;
}

interface StateType {
  avator: string;
}

const initialState = {
  avator: '',
};
const context = React.createContext<{ state: StateType; dispatch: React.Dispatch<ActionType> }>({
  state: initialState,
  dispatch: noop,
});

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'SET_AVATOR':
      return {
        ...state,
        avator: action.payload.avator,
      };
    default:
      return state;
  }
}

const ContextProvider: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <context.Provider value={{ state, dispatch }}>{props.children}</context.Provider>;
};

export { reducer, context, ContextProvider };
