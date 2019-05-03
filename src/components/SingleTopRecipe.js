import React from "react";
import { Link } from "react-router-dom";

//AN OBJECT MUST BE RECEIVED BY PROPS
const SingleTopRecipe = props => {
    // const { title, imgPath } = props.object;
    const title = "Pastisio";
    const imgPath = "pasticcio.png";
    return (
        <div className="single-topRecipe">
            <div className="single-topRecipe-img">
                <Link to={`/`}>
                    <img
                        className="topRecipe-img"
                        src={`/imgs/${imgPath}`}
                        alt="Pasticcio"
                    />
                </Link>
            </div>
            <p>{title}</p>

            <button type="button" id="single-recipe-button">
                Recipe
            </button>
        </div>
    );
};

export default SingleTopRecipe;
