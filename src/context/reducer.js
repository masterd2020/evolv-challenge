const reducer = (state, action) => {
  
  if(action.type === "CREATE_DISH") {
    const {editId} = action.payload;
    
    // For editing
    const editObject = state.dish.find((el) => el.id === editId);
    if(editObject !== undefined) {
      const newState = state.dish.map((el) => {
        if(el.id === editId) {
          el = {id: editObject.id, ...action.payload.object}
        }
        return el;
      });
      
      return { ...state, dish: [...newState] };
    };
    
    
    const lastIndex = state.dish[state.dish.length-1];
    const newObject = {...action.payload.object, id: lastIndex.id + 1};
    
    return { ...state, dish: [...state.dish, newObject] };
  }
  
  if(action.type === "EDIT") {
    const {object: {setName, setProtein, setFats, setCarbs, setCalories, setEditId}} = action.payload;
    const {name, protein, fats, carbs, calories, id} = state.dish.find((el) => el.id === action.payload.id);
    
    setName(name);
    setProtein(protein);
    setFats(fats);
    setCarbs(carbs);
    setCalories(calories);
    setEditId(id);
    
    return state;
  }
  
  if(action.type === "DELETE") {
    const newState = state.dish.filter((el) => el.id !== action.payload);
    
    return { ...state, dish: [...newState] };
  }
  
  if(action.type === "SEARCH") {
    const searchTerm = action.payload;
    
    let newState = state.dish.filter((el) => {
      if(el.name.includes(searchTerm)) return el;
      
      return;
    });
    
    return { ...state, dish: [...newState] };
  }
  
  if(action.type === "LOGIN") {
    const {fullName, admin} = action.payload;
    
    return {...state, user: {...state.user, isAdmin: admin, fullName}}
  }
  
  if(action.type === "LOGOUT") {
    return {...state, user: {...state.user, isAdmin: false}}
  }
  
  // Default State
  return state;
};

export default reducer;