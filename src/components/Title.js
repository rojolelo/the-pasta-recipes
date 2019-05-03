import React from "react";

const Title = props => {
    return (
        <div className="title" id="subtitle">
            <h1>{props.children}</h1>
        </div>
    );
};

export default Title;
