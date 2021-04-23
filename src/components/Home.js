import React from "react";
import {Link} from "react-router-dom";
import "../css/home.css"



const Home = (prop)=>{
    return(
        <div className="orderDiv">
            <p>Your favorite food,delivered while coding</p>
            <Link to="/pizza">
                <button>Pizza?</button>
            </Link>
        </div>
    )
}

export default Home;