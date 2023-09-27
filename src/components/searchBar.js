import "./searchBar.css"
import { useState } from "react";

function SearchBar({ onSubmit }){
    const [term , setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

      onSubmit(term);
    };
    const handleChange = (event) => {
        
    setTerm(event.target.value);

    };
    return (
    <div className="searchBar">
       <form onSubmit={handleFormSubmit}>
         <label>Enter a seach term </label>
          <input value={term} onChange={handleChange} />
       </form>
        

    </div>

    );
    }
    export default SearchBar;