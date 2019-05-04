import React from "react";
import HomeHeader from "./components/HomeHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopRecipes from "./components/TopRecipes";
import AboutPasta from "./components/AboutPasta";
import Catalogue from "./components/Catalogue";

class App extends React.Component {
    state = {
        catalogue: ""
    };

    catalogue = boolean => {
        this.setState({
            catalogue: boolean
        });
    };

    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => {
                                return (
                                    <React.Fragment>
                                        <HomeHeader
                                            catalogue={this.catalogue}
                                            showCatalogue={this.state.catalogue}
                                            location={props.location}
                                        />
                                        <TopRecipes />
                                        <AboutPasta />
                                    </React.Fragment>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/catalogue"
                            render={props => {
                                return (
                                    <React.Fragment>
                                        <HomeHeader
                                            catalogue={this.catalogue}
                                            showCatalogue={this.state.catalogue}
                                            location={props.location}
                                        />
                                        <Catalogue />
                                    </React.Fragment>
                                );
                            }}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
