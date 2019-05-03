import React from "react";
import Title from "./Title";

const AboutPasta = () => {
    return (
        <div className="aboutPasta-container">
            <Title>A little about Pasta</Title>
            <div className="aboutPasta">
                <div className="facts" id="fact1">
                    <div className="aboutPasta-content">
                        <div className="icon">
                            <i className="fas fa-utensils" />
                        </div>
                        <p className="about-p">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                        </p>
                    </div>
                </div>
                <div className="facts" id="fact2">
                    <div className="aboutPasta-content">
                        <div className="icon">
                            <i className="fas fa-bacon" />
                        </div>
                        <p className="about-p">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                        </p>
                    </div>
                </div>
                <div className="facts" id="fact3">
                    <div className="aboutPasta-content">
                        <div className="icon">
                            <i className="fas fa-bread-slice" />
                        </div>
                        <p className="about-p">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPasta;
