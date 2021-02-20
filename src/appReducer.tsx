import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};
const context = React.createContext<Record<string, any>>({});

interface actionType {
  type: string;
  payload: any;
}

function reducer(state: Record<string, any>, action: actionType): any {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'foo':
      return {
        ...state,
        count: action.payload.foo,
      };
    default:
      return state;
  }
}

const ContextProvider: React.FC = props => {
  type useReducerResType = [any, React.Dispatch<actionType>];

  const res: useReducerResType = useReducer(reducer, initialState);
  const [state, dispatch] = res;
  return <context.Provider value={{ state, dispatch }}>{props.children}</context.Provider>;
};

export { reducer, context, ContextProvider };
