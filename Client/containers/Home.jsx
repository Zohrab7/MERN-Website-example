import React, {Component} from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);

    }

    imgLoader = () => {
        let i = 0;
        let $ = this;
        let inter = setInterval(() => {
            if (i < $.props.homePage.loaderImgs.length) {
                $.props.setLoader($.props.homePage.techNames[i], $.props.homePage.loaderImgs[i]);
                i++;
            } else {
                clearInterval(inter);
            }
        }, 4000);
    };

    componentDidMount() {
        this.imgLoader();
    }

    render() {
        return (
            <section
                className="animated zoomIn page-0 d-flex -flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-column">
                <section className="home-content-area d-flex justify-content-center">
                    <section className="home-container">
                        <section
                            className="h-25 m-0 header d-flex align-items-center align-items-center justify-content-center">
                            <p>{this.props.homePage.defHeader}</p></section>
                        <section className="d-flex align-items-center justify-content-center w-100 h-75">
                            <section className="loader"
                                     style={{backgroundImage: `url(/images/home/${this.props.homePage.defImgSrc})`}}>
                                <section className="face face1">
                                    <section className="circle"></section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="home-descr-area d-md-flex d-lg-flex align-items-center">
                    <p>{this.props.homePage.textContent}</p>
                </section>
            </section>
        );
    }
}