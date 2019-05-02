import React from "react";
import HomeHeader from "./components/HomeHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopRecipes from "./components/TopRecipes";

class App extends React.Component {
    state = {};
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <HomeHeader />
                    <TopRecipes />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
