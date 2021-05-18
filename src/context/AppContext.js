import React, {useContext, useState, useReducer} from "react";
import reducer from "./reducer";

//import {getWord} from "../data/url";

const AppContext = React.createContext();

const initialState = {
  user: {
    fullName: "",
    isAdmin: false
  },
  dish: [
    {
      name: "pizza",
      id: 0,
      protein: "5%",
      carbs: "34%",
      fats: "3%",
      calories: "1%"
    },
    {
      name: "pizza",
      id:1,
      protein: "5%",
      carbs: "34%",
      fats: "3%",
      calories: "1%"
    }
  ]
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [protein, setProtein] = useState("");
  const [fats, setFats] = useState("");
  const [carbs, setCarbs] = useState("");
  const [calories, setCalories] = useState("");
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [fullName, setFullName] = useState("");
  const [admin, setAdmin] = useState(false);
  
  return(
    <AppContext.Provider value={{
      state,
      dispatch,
      editing,
      setEditing,
      name,
      setName,
      protein,
      setProtein,
      fats,
      setFats,
      carbs,
      setCarbs,
      calories,
      setCalories,
      editId,
      setEditId,
      setSearchTerm,
      searchTerm,
      admin,
      setAdmin,
      fullName,
      setFullName
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};