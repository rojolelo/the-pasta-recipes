import React from "react";
import { Link } from "react-router-dom";

//AN OBJECT MUST BE RECEIVED BY PROPS
const SingleTopRecipe = props => {
    // const { title, imgPath } = props.object;
    const title = "Pastisio";
    return (
        <div className="single-topRecipe">
            <div className="single-topRecipe-img">
                <Link to={`/`}>
                    <img
                        className="topRecipe-img"
                        src={`https://firebasestorage.googleapis.com/v0/b/directorio-de-negocios-a257b.appspot.com/o/pasticcio.png?alt=media&token=d60110fb-0ece-43fb-945a-27108cfd26be`}
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
