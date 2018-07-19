import React from 'react';

export const Aside = props => {
    const slider = () => props.sliderImgs.map((src, i) =>
        <section key={i} className={`col-left-${i} col-4 col-sm-4 col-md-4 col-lg-4 col-xl-12`}
                 style={{backgroundImage: `url(/images/sliders/${src})`}}></section>);
    return (
        <aside
            className="d-none d-sm-none d-md-none d-lg-none d-xl-block my-col-left col-xl-6 order-last order-sm-last order-md-last order-lg-last order-xl-first"
            style={{bottom: `${props.slideValue}%`}}>
            <section
                className="l-container d-flex d-sm-flex d-md-flex d-lg-flex d-xl-block flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-column">
                <section
                    className="col-left-4 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-12 d-flex align-items-end justify-content-end"
                    style={{"backgroundImage": `url(${'/images/sliders/contact.gif'})`}}>
                    <section className="mouse-content d-flex flex-column">
                        <div id="mouse-scroll">
                            <div id="mouse"></div>
                            <div className="scroll-bars">
                                <div className="scroll-bar"></div>
                                <div className="scroll-bar"></div>
                                <div className="scroll-bar"></div>
                            </div>
                        </div>
                    </section>
                </section>
                {slider()}
                <section className="col-left-0 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-12"
                         style={{"backgroundImage": `url(${'/images/sliders/home.gif'})`}}></section>
            </section>
        </aside>
    );
};