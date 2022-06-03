import React, { useReducer } from "react";
export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    // actions = {addBlogPost : (dipatch) => return () => {}}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
