import React from "react";
import "./Admin.css";
import {useGlobalContext} from "../../context/AppContext";
import {Link} from "react-router-dom";

const Admin = () => {
  const {dispatch} = useGlobalContext();
  
  
  return(
    <div className="admin__container">
      <h2><Link to="/evolv-challenge/admin">Admin Page</Link></h2>
      <h2><Link to="/evolv-challenge">User Page</Link></h2>
      <button onClick={() => dispatch({type: "LOGOUT"})} className="logout__button">Logout</button>
      <CreateDish />
      <DisplayDish />
    </div>
  )
}


const CreateDish = () => {
  const {dispatch, editing, name, setName, protein, setProtein, fats, setFats, carbs, setCarbs, calories, setCalories, setEditing, editId, setEditId} = useGlobalContext();
  
  const createDish = (e) => {
    e.preventDefault();
    
    /*if(name.length === 0 && protein.length === 0 && fats.length === 0 && carbs.length === 0 && calories.length === 0) {
      alert("Please provide all the fields");
      return;
    }*/
    
    if(name.length === 0) {
      alert("Please provide the name fields");
      return;
    }
    if(protein.length === 0) {
      alert("Please provide the protein fields");
      return;
    }
    if(fats.length === 0) {
      alert("Please provide the fats fields");
      return;
    }
    if(carbs.length === 0) {
      alert("Please provide the carbs fields");
      return;
    }
    if(calories.length === 0) {
      alert("Please provide the calories fields");
      return;
    }
    
    dispatch({type:"CREATE_DISH", payload: {object: {name, protein, fats, carbs, calories}, editId, setEditId}})
    
    // Clearing the input field for better UX
    setName("");
    setProtein("")
    setFats("")
    setCalories("")
    setCarbs("")
    setEditing(false)
  }
  
  return(
    <div className="create__dish--container">
      <h4>Add a dish</h4>
      <form className="create__dish--form">
        <div className="form__wrapper--container">
          <div className="form__wrapper">
            <label>Name</label><br />
            <input type="text" placeholder="Dish name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form__wrapper">
            <label>Protein</label><br />
            <input type="text" placeholder="Protein" value={protein} onChange={(e) => setProtein(e.target.value)} />
          </div>
          <div className="form__wrapper">
            <label>Carbs</label><br />
            <input type="text" placeholder="Carbs" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
          </div>
          <div className="form__wrapper">
            <label>Fats</label><br />
            <input type="text" placeholder="Fats" value={fats} onChange={(e) => setFats(e.target.value)} />
          </div>
          <div className="form__wrapper">
            <label>Calculated Calories</label>
            <input type="text" placeholder="Calculated Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
          </div>
        </div>
        <button onClick={(e) => createDish(e)} className="create__dish--button">{editing ? "Edit Dish" : "Create Dish"}</button>
      </form>
    </div>
  );
}


const DisplayDish = () => {
  const {state, dispatch, setEditing, setName, setProtein, setFats, setCarbs, setCalories, setEditId} = useGlobalContext();
  
  const editDish = (id) => {
    setEditing(true)
    dispatch({type: "EDIT", payload: {id, object: {setName, setProtein, setFats, setCarbs, setCalories, setEditId}}})
  }
  
  const deleteDish = (id) => {
    dispatch({type: "DELETE", payload: id})
  }
  
  return(
    <div className="display__table--container">
      <h3>All Dishes</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th>Calculated Calories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            state.dish.map((el) => {
              const {id, name, protein, carbs, fats, calories} = el;
              return <tr key={id}>
            <td>{name}</td>
            <td>{protein}</td>
            <td>{carbs}</td>
            <td>{fats}</td>
            <td>{calories}</td>
            <td>
              <button onClick={() => editDish(id)}>Edit</button> |  
              <button onClick={() => deleteDish(id)}>Delete</button>
            </td>
          </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}





export default Admin;
