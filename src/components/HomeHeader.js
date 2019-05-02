import React, { Component } from "react";

class HomeHeader extends Component {
    state = {
        catalogueButton: true
    };
    render() {
        return (
            <div className="homeHeader">
                <h1>The Pasta Recipe</h1>
                {this.state.catalogueButton ? (
                    <button type="button" id="catalogue-button">
                        Ver Catalogo
                    </button>
                ) : null}
            </div>
        );
    }
}

export default HomeHeader;
