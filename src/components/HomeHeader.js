import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeHeader extends Component {
    header = route => {
        if (route === "/catalogue") {
            return (
                <div className="homeHeader">
                    <Link to={"/"}>
                        <img src="/imgs/logo.png" alt="logo" id="logo" />
                    </Link>
                </div>
            );
        }
        return (
            <div className="homeHeader">
                <Link to={"/"}>
                    <img src="/imgs/logo.png" alt="logo" id="logo" />
                </Link>
                <Link to={"/catalogue"}>
                    <button type="button" id="catalogue-button">
                        Check our catalogue
                    </button>
                </Link>
            </div>
        );
    };

    render() {
        const route = this.props.location.pathname;
        return <React.Fragment>{this.header(route)}</React.Fragment>;
    }
}

export default HomeHeader;
