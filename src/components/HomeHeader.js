import React, { Component } from "react";

class HomeHeader extends Component {
    state = {
        catalogueButton: true
    };
    render() {
        return (
            <div className="homeHeader">
                <img src="/imgs/logo.png" alt="logo" id="logo" />
                {this.state.catalogueButton ? (
                    <button type="button" id="catalogue-button">
                        Check our catalogue
                    </button>
                ) : null}
            </div>
        );
    }
}

export default HomeHeader;
