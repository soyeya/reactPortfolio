import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => {

     return(
        <div className="nav">
            <ul>
               <Link to='/apps'>App Project</Link>
               <Link to='/'>Home</Link>
               <Link to='/web'>Websites</Link>
            </ul>
        </div>
     )
}

export default Navi;