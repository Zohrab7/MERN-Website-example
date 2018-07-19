import React, {Component} from 'react';
import {Map} from "../components/ContactParts/Map";
import fetch from "node-fetch";

export class Contact extends Component {
    mailer = (name, email, message) => {

        if (name !== undefined) {
            let jsonUpload =
                {
                    method: "post",
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: name.innerText, email: email.innerText, message: message.innerText})
                };

            fetch("http://localhost:3001/admin", jsonUpload)
                .then(
                    response => response.json()
                    // response => response.json() // if the response is a JSON object
                ).then(
                success => console.log(success) // Handle the success response object
            ).catch(
                error => console.log(error) // Handle the error response object
            );
        }
    };

    render() {
        return (
            <section className="animated rubberBand page-4">
                <section className="map-area">
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBczXSFq_hPSzpD66oNOqxIW9z1C8A1Xhc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<section style={{height: `100%`}}/>}
                        containerElement={<section style={{height: `100%`, width: `100%`}}/>}
                        mapElement={<section style={{height: `100%`}}/>}
                    />
                </section>
                <section className="form-area row">
                    <section
                        className="left-f-area col-12 col-sm-12 col-md-5 col-lg-5 col-xl-12 d-flex align-items-center">
                        <section className="inp-container-1">
                            <section className="input-1 row">
                                <span>Your Name</span>
                                <section contentEditable={true} className="name-area" ref="name"></section>
                            </section>
                            <section className="input-2 row">
                                <span>Your Email</span>
                                <section contentEditable={true} className="email-area" ref="email"></section>
                            </section>
                        </section>
                    </section>
                    <section
                        className="right-f-area col-12 col-sm-12 col-md-7 col-lg-7 col-xl-12 d-flex align-items-center justify-content-center">
                        <section className="inp-container-2 row">
                            <section className="message-area">
                                <span>Your Message</span>
                                <section contentEditable={true} className="message-input" ref="message"></section>
                            </section>
                            <section className="button-area d-flex align-items-end justify-content-around">
                                <button className="m-button"
                                        onClick={() => this.mailer(this.refs.name, this.refs.email, this.refs.message)}>send
                                </button>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }


};