import React, {Component} from 'react';
import {keyframes} from 'styled-components';

export class Portfolio extends Component {
    progressAnim = value => {
        return {
            animation: keyframes`
                            0% {
                                width: 0;
                                }
                                     0.85% {
                                opacity: 0.5;
                                }
                                   0.95% {
                                opacity: 0;
                                }
                            100% {
                            width: ${value}%;
                             opacity: 1;
                            }`,
            animationDuration: "4s",
            animationFillMode: "forwards"
        };
    };

    render() {
        return (
            <section className="animated flipInX page-2">
                <section className="container-fluid progressBar">
                    <section className="d-flex flex-row progressBar-1">
                        {/*--Frontend--*/}
                        <section className="Frontend col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <h4>Frontend</h4>
                            <section className="progressLine-0">
                                <p>React/Redux</p>
                                <section className="progress-0 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-0" style={this.progressAnim(90)}>90%
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className="progressLine-1">
                                <p>HTML5/CSS3/Bootstrap4</p>
                                <section className="progress-1 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-1" style={this.progressAnim(90)}>90%
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className="progressLine-2">
                                <p>ECMAScript <span>2015 2016 2017</span></p>
                                <section className="progress-2 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-2" style={this.progressAnim(80)}>80%
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                        {/*--Backend--*/}
                        <section className="Backend col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <h4>Backend</h4>
                            <section className="progressLine-3">
                                <p>Node.js Express</p>
                                <section className="progress-3 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-3" style={this.progressAnim(80)}>80%
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className="progressLine-4">
                                <p>PHP</p>
                                <section className="progress-4 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-4" style={this.progressAnim(50)}>50%
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="d-flex flex-row progressBar-2">
                        {/*--Databases--*/}
                        <section className="Databases col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <h4>Databases</h4>
                            <section className="progressLine-5">
                                <p>Mysql</p>
                                <section className="progress-5 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-5" style={this.progressAnim(70)}>70%
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className="progressLine-6">
                                <p>MongoDb/Mongoose</p>
                                <section className="progress-6 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-6" style={this.progressAnim(60)}>60%
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                        {/*--Other Stuff--*/}
                        <section className="OtherStuff col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <h4>Other Stuff</h4>
                            <section className="progressLine-7">
                                <p>Rx JS Reactive programming</p>
                                <section className="progress-7 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-7" style={this.progressAnim(35)}>35%
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className="progressLine-8">
                                <p>JS Asynchronous programming</p>
                                <section className="progress-8 d-flex align-items-center justify-content-center">
                                    <section className="outter-progress">
                                        <section className="inner-progress-8" style={this.progressAnim(60)}>60%
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}