import React, {Component} from "react";
import Slider from "react-slick";
import {withRouter} from "react-router-dom";

class SliderExp extends Component {
    render() {
        console.log(this.props.sliderImgs);
        let settings = {
            accessibility: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            afterChange: current => {
                this.props.history.push("/");
                this.props.setClass(this.props.animClass[1]);
                this.props.setClass(this.props.animClass[0], 400);
                this.props.setCategory({[Object.keys(this.props.slideCategories)[current]]: Object.values(this.props.slideCategories)[current]});
            }
        };
        return (
            <Slider {...settings}>
                <section className="col-left-04"><img src={`/images/sliders/${this.props.sliderImgs[4]}`}/></section>
                <section className="col-left-00"><img src={`/images/sliders/${this.props.sliderImgs[0]}`}/></section>
                <section className="col-left-01"><img src={`/images/sliders/${this.props.sliderImgs[1]}`}/></section>
                <section className="col-left-02"><img src={`/images/sliders/${this.props.sliderImgs[2]}`}/></section>
                <section className="col-left-03"><img src={`/images/sliders/${this.props.sliderImgs[3]}`}/></section>
            </Slider>
        );
    };
}

export default withRouter(SliderExp);