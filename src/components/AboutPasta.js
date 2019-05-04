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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc sagittis varius hendrerit. Ut laoreet
                            arcu vitae dolor venenatis tincidunt. Fusce varius
                            facilisis bibendum. Suspendisse potenti. Nam at
                            sagittis nisi. Nullam sed pellentesque elit. Etiam
                            tincidunt libero magna, at sodales mauris semper
                            sed. Donec elementum dolor eu tortor viverra porta.
                        </p>
                    </div>
                </div>
                <div className="facts" id="fact2">
                    <div className="aboutPasta-content">
                        <div className="icon">
                            <i className="fas fa-bacon" />
                        </div>
                        <p className="about-p">
                            Mauris id leo suscipit, facilisis erat nec, maximus
                            tortor. Sed gravida arcu id rutrum eleifend. Duis a
                            efficitur quam, eget congue nisi. Integer quis
                            semper purus. Cras vel sem quis risus vulputate
                            placerat. Mauris consectetur maximus dui, eget
                            pulvinar sem sagittis et. Aenean lacinia, leo vel
                            accumsan tempus.
                        </p>
                    </div>
                </div>
                <div className="facts" id="fact3">
                    <div className="aboutPasta-content">
                        <div className="icon">
                            <i className="fas fa-bread-slice" />
                        </div>
                        <p className="about-p">
                            Praesent hendrerit nulla eleifend erat accumsan
                            imperdiet. Pellentesque vel velit nibh. Maecenas
                            bibendum libero non scelerisque placerat. Donec nec
                            dui nunc. Proin consectetur hendrerit ultricies.
                            Quisque eget dui vel eros accumsan vulputate a at
                            nunc. Vestibulum varius dapibus nulla. Donec sed
                            massa eget nulla aliquam commodo a eget felis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPasta;
