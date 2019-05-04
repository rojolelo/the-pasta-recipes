import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeHeader extends Component {
    header = route => {
        if (route === "/catalogue") {
            return (
                <div className="homeHeader">
                    <Link to={"/"}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/directorio-de-negocios-a257b.appspot.com/o/logo.png?alt=media&token=6adefac4-7af3-44f0-bdbc-9f083f057853"
                            alt="logo"
                            id="logo"
                        />
                    </Link>
                </div>
            );
        }
        return (
            <div className="homeHeader">
                <Link to={"/"}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/directorio-de-negocios-a257b.appspot.com/o/logo.png?alt=media&token=6adefac4-7af3-44f0-bdbc-9f083f057853"
                        alt="logo"
                        id="logo"
                    />
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
