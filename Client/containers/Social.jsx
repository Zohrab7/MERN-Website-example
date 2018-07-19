import React, {Component} from 'react';

export class Social extends Component {
    render() {
        return (
            <section className="animated zoomInLeft page-2 d-flex justify-content-center align-items-center">
                <section className="social-container container-fluid">
                    <section
                        className="social-text text-center text-sm-center text-md-center text-lg-center text-xl-left">
                        <h3>Find Me in Social Medias</h3>
                    </section>
                    <section
                        className="container-fluid d-flex justify-content-center align-content-lg-center outter-social">
                        <section
                            className="d-flex flex-column flex-sm-row flex-md-row  flex-lg-row flex-xl-column inner-social">
                            <section
                                className="facebook d-flex flex-row flex-sm-column flex-md-column flex-lg-column flex-xl-row">
                                <a href="https://www.facebook.com/zohrabaleksanyan"
                                   className="d-flex justify-content-center">
                                   <span className="d-flex justify-content-center align-items-center">
                                      <i className="fab fa-facebook-f fa-2x" aria-hidden="true"></i>
                                   </span>
                                </a>
                                <article
                                    className="ml-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-4 d-flex justify-content-center align-items-center">
                                    <p>in Facebook</p>
                                </article>
                            </section>
                            <section
                                className="linkedin d-flex flex-row flex-sm-column flex-md-column flex-lg-column flex-xl-row">
                                <a className="d-flex justify-content-center"
                                   href="https://www.facebook.com/zohrabaleksanyan">
                            <span className="d-flex justify-content-center align-items-center">
                                <i className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>
                            </span>
                                </a>
                                <article
                                    className="ml-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-4 d-flex justify-content-center align-items-center">
                                    <p>in LinkedIn</p>
                                </article>
                            </section>
                            <section
                                className="twitter d-flex flex-row flex-sm-column flex-md-column flex-lg-column flex-xl-row">
                                <a className="d-flex justify-content-center"
                                   href="https://www.facebook.com/zohrabaleksanyan">
                            <span className="d-flex justify-content-center align-items-center">
                                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
                            </span>
                                </a>
                                <article
                                    className="ml-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-4 d-flex justify-content-center align-items-center">
                                    <p>in Twitter</p>
                                </article>
                            </section>
                            <section
                                className="github d-flex flex-row flex-sm-column flex-md-column flex-lg-column flex-xl-row">
                                <a className="d-flex justify-content-center"
                                   href="https://www.facebook.com/zohrabaleksanyan">
                             <span className="d-flex justify-content-center align-items-center">
                                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                           </span>
                                </a>
                                <article
                                    className="ml-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-4 d-flex justify-content-center align-items-center">
                                    <p>in Github</p>
                                </article>
                            </section>
                            <section
                                className="instagram d-flex flex-row flex-sm-column flex-md-column flex-lg-column flex-xl-row">
                                <a className="d-flex justify-content-center"
                                   href="https://www.instagram.com/zohrabaleksanyan/">
                               <span className="d-flex justify-content-center align-items-center">
                                <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
                            </span>
                                </a>
                                <article
                                    className="ml-4 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-4 d-flex justify-content-center align-items-center">
                                    <p>in Instagram</p>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}