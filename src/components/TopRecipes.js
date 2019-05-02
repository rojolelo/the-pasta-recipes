import React, { Component } from "react";
import SingleTopRecipe from "./SingleTopRecipe";
import Title from "./Title";

class TopRecipes extends Component {
    render() {
        return (
            <div className="topRecipes-container">
                <Title>Top Recipes</Title>
                <div className="topRecipes">
                    <SingleTopRecipe />
                    <SingleTopRecipe />
                    <SingleTopRecipe />
                </div>
            </div>
        );
    }
}

export default TopRecipes;
