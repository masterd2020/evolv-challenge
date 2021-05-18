import React from "react";
import "./User.css";
import {useGlobalContext} from "../../context/AppContext";
import {Link} from "react-router-dom";

const User = () => {
  
  return(
    <div className="user__container">
      <h2><Link to="/">User Page</Link></h2>
      <h2><Link to="/admin">Admin Page</Link></h2>
      <h2><Link to="/login">Login Page</Link></h2>
      <Search />
      <DisplayDish />
    </div>
  )
}

const Search = () => {
  const {setSearchTerm, searchTerm, dispatch} = useGlobalContext();
  
  const filterDish = (e) => {
    setSearchTerm(e.target.value);
    dispatch({type: "SEARCH", payload: e.target.value});
  }
  
  return (
    <div className="search__container">
      <label>Search</label><br />
      <input type="text" placeholder="Search any dish name" value={searchTerm} onChange={(e) => filterDish(e)} />
    </div>
  );
};

const DisplayDish = () => {
  const {state} = useGlobalContext();
  
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
          </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default User;