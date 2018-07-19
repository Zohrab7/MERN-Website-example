import React, {Component} from 'react';

export class Education extends Component {
    render() {
        return (
            <section className="animated jackInTheBox page-1">
                <section className="container-fluid eduInfo">
                    <section className="edu-row-0">
                        <img className="float-left mr-3 rounded" src="images/education/seua.png" alt=""/>
                        <b>My Education in National Polytechnic University of Armenia</b>
                        <p>I've had studied Computer Science in the National Polytechnic University of Armenia from
                            2009-2013. I've Bachelor's Degree in Computer Science recieved in 2013 after finishing the
                            all 4 full courses
                            in the Campus of Gyumri of the National Polytechnic University of Armenia with the good
                            marks
                        </p>
                    </section>
                    <section className="edu-row-1">
                        <img className="float-left mr-3 rounded" src="images/education/basic.png" alt=""/>
                        <b>My Education in BASIC IT Center of Armenia</b>
                        <p>I've had studied JAVA CORE , OOP , Spring MVC , JSP/Servlets(JAVA EE) , MySQL , HTML5 , CSS3 in BASIC IT
                            Center The n1 IT Center of Armenia located in the capital Yerevan , Armenia from 2016-2017.
                            I've recieved the Certificate of the JAVA language courses in 2017
                            and I'm fully aware of these all technologies . I've used to build web servers with Java
                            Servelts on the Apache TomCat server</p>
                    </section>
                    <section className="edu-row-2">
                        <img className="float-left mr-3 rounded" src="images/education/gtc.png" alt=""/>
                        <b>My Education in Gyumri Technology Center</b>
                        <p>I've studied JavaScript and the latest versions of the EcmaScript 2015 , 2016 , 2017
                            Jquery , React.js , RxJS , Node.js Express Framework , PHP , MongoDb , Mysql in the Gyumri Technology
                            Center in
                            2017 . I've recieved the Certificate of JavaScript,PHP in 2017.I'm fully aware of these
                            technologies I have used to
                            build responsive websites with the React.js+ES6 with a little mix of the Reactive and
                            Asynchronous Programming on the Node.js Web Server . . .</p>
                    </section>
                </section>
            </section>
        );
    }
}