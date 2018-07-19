import React from 'react';
import {Navbar} from "./Navbar";
import {Home} from "../../containers/Home";
import {Announcement} from "../../containers/Announcement";
import {Route, Switch} from "react-router-dom";
import {Education} from "../../containers/Education";
import {Portfolio} from "../../containers/Portfolio";
import {Social} from "../../containers/Social";
import {Contact} from "../../containers/Contact";

export const Main = props => {
    return (
        <main
            className="my-col-right d-lg-flex d-md-flex d-sm-flex d-flex col-lg-12 col-xl-6 order-first order-sm-first order-md-first order-lg-first order-xl-last  justify-content-center">
            <section className="r-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <Navbar
                    navItems={props.navItems}
                />
                <section className="col-right-2">
                    <Switch>
                        <Route exact path="/" render={() =>
                            <Announcement
                                displayroute={props.displayroute}
                                displaydata={props.displaydata}
                                defAnimClass={props.defAnimClass}
                                slideCategories={props.slideCategories}
                            />}/>
                        <Route path="/home" render={() => <Home
                            homePage={props.homePage}
                            setLoader={props.setLoader}
                        />}/>
                        <Route path="/education" render={() => <Education/>}/>
                        <Route path="/portfolio" render={() => <Portfolio/>}/>
                        <Route path="/social" render={() => <Social/>}/>
                        <Route path="/contact" render={() => <Contact/>}/>
                    </Switch>
                </section>
            </section>
        </main>
    );
};
