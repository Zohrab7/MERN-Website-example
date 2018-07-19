import React, {Component} from 'react';
import {Main} from "../components/AppParts/Main";
import {Aside} from "../components/AppParts/Aside";
import {connect} from "react-redux";
//------------------Actions-------------------------------------------
import {setCategory} from "../redux/actions/displayActions";
import {setSlideUp, setSlideDown} from "../redux/actions/sliderActions";
import {setClass} from "../redux/actions/classAnimActions";
import {set_Loader} from "../redux/actions/homePageActions";
//--------------------------------------------------------------------------------------
import {Observable} from 'rx';
import SliderExp from "../components/AppParts/Slider";
import {withRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

        let $ = this;
        scroll(0, 3000);
        Observable.fromEvent(document, "scroll")
            .throttle(1000)
            .subscribe(() => {
                // let limit = document.body.offsetHeight - window.innerHeight;
                if (window.innerWidth > 1199) {
                    switch (true) {
                        case (window.scrollY < 2000 && $.props.slide.value === 40):
                            $.props.history.push("/");
                            setTimeout(() => {
                                // scroll(0, 3500);
                                window.scrollTo({
                                    top: 8000,
                                    behavior: "instant"
                                });
                            }, 1000);
                            $.props.slideUp(240);//100
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[4]]: Object.values(this.props.display.slideCategories)[4]});
                            break;//..CONTACT---2-----V-----//
                        //------------------------------3000-----------------START---------------------//HOME 1***
                        case (window.scrollY > 4000 && $.props.slide.value === 40):
                            $.slideUp();//100
                            $.props.history.push("/");
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[1]]: Object.values(this.props.display.slideCategories)[1]});
                            break;//EDUCATION
                        case (window.scrollY > 5000 && $.props.slide.value === 100):
                            $.props.history.push("/");
                            $.slideUp();//160
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[2]]: Object.values(this.props.display.slideCategories)[2]});
                            break;//SOCIAL
                        case (window.scrollY > 6000 && $.props.slide.value === 160):
                            $.props.history.push("/");
                            $.slideUp();//220
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[3]]: Object.values(this.props.display.slideCategories)[3]});
                            break;//PORTFOLIO
                        case (window.scrollY > 7000 && $.props.slide.value === 220):
                            $.props.history.push("/");
                            $.slideUp();//280
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[4]]: Object.values(this.props.display.slideCategories)[4]});
                            break;//CONTACT
                        case (window.scrollY < 4000 && $.props.slide.value === 100):
                            $.props.history.push("/");
                            $.slideDown();
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[0]]: Object.values(this.props.display.slideCategories)[0]});
                            break;//HOME
                        case (window.scrollY < 5000 && $.props.slide.value === 160):
                            $.props.history.push("/");
                            $.slideDown();
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[1]]: Object.values(this.props.display.slideCategories)[1]});
                            break;//EDUCATION
                        case (window.scrollY < 6000 && $.props.slide.value === 220):
                            $.props.history.push("/");
                            $.slideDown();
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[2]]: Object.values(this.props.display.slideCategories)[2]});
                            break;//SOCIAL
                        case (window.scrollY < 7000 && $.props.slide.value === 280):
                            $.props.history.push("/");
                            $.slideDown();
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[3]]: Object.values(this.props.display.slideCategories)[3]});
                            break;//PORTFOLIO
                        //-----window.scrollY===8000--------------------------------------280---//CONTACT--2---
                        case (window.scrollY > 9000 && $.props.slide.value === 280):
                            $.props.history.push("/");
                            setTimeout(() => {
                                // scroll(0, 250);
                                window.scrollTo({
                                    top: 3000,
                                    behavior: "instant"
                                });
                            }, 1000);
                            $.props.slideDown(240);
                            $.props.setClass($.props.slide.animClass[1]);
                            $.props.setClass($.props.slide.animClass[0], 400);
                            $.props.setCategory({[Object.keys(this.props.display.slideCategories)[0]]: Object.values(this.props.display.slideCategories)[0]});
                            break;//HOME----^--1***--//
                        //------------------------------10.000------ENDPOINT-------------------------
                        default:
                            ;
                    }
                }
            });
    }

    slideUp = () => {
        this.props.slideUp(60)
    };
    slideDown = () => {
        this.props.slideDown(60)
    };

    render() {
        if (this.props.switch) {
            console.log("You use Desktop version");
        } else {
            console.log("You use Mobile version");
        }
        return (
            <section className="d-flex row my-row flex-lg-row flex-xl-row">
                <Main
                    defAnimClass={this.props.slide.defAnimClass}
                    navItems={this.props.slide.navItems}
                    displaydata={Object.values(this.props.display.displayData)[0]}
                    slideCategories={Object.keys(this.props.display.slideCategories)}
                    displayroute={Object.keys(this.props.display.displayData)[0]}
                    homePage={this.props.homePage}
                    setLoader={this.props.setLoader}
                />
                <Aside
                    sliderImgs={this.props.slide.sliderImgs}
                    slideValue={this.props.slide.value}
                />
                <aside className="d-block d-sm-block d-md-block d-lg-block d-xl-none my-col-left my-col-left2">
                    <section className="inner-slider">
                        <SliderExp
                            sliderImgs={this.props.slide.sliderImgs}
                            setCategory={this.props.setCategory}
                            setClass={this.props.setClass}
                            slideCategories={this.props.display.slideCategories}
                            animClass={this.props.slide.animClass}
                        />
                    </section>
                </aside>

            </section>
        );
    }
}

const mapStateToProps = (state) => {
    if (state) {
        return {
            slide: state.slide,
            display: state.display,
            homePage: state.homePage
        }
    }
};
const mapDispatchToProps = dispatch => {
    return {

        setLoader: (header, imgSrc) => {
            dispatch(set_Loader(header, imgSrc))
        },
        setCategory: name => {
            dispatch(setCategory(name));
        },
        setClass: (name, time) => {
            dispatch(setClass(name, time));
        },
        slideUp: value => {
            dispatch(setSlideUp(value))
        },
        slideDown: value => {
            dispatch(setSlideDown(value))
        }
    };
};
//export default here only
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
