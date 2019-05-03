import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";
import Title from "./Title";

class Catalogue extends Component {
    state = {
        recipes: [1, 5, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };

    recipes = () => {
        if (!Boolean(this.state.recipes)) return null;

        return (
            <React.Fragment>
                {this.state.recipes.map(x => {
                    return <SingleRecipe />;
                })}
            </React.Fragment>
        );
    };

    render() {
        return (
            <div className="catalogue-container">
                <Title>Catalogue</Title>
                <div className="recipes-container">{this.recipes()}</div>
            </div>
        );
    }
}

export default Catalogue;
