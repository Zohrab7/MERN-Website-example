import React,{Component} from 'react';
import fetch from "node-fetch";

export class Admin extends Component{
    constructor(props) {
        super(props);
        this.state={
            messages:{}
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/admin",
            {
                method:"post",  headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
            })
            .then(
                response => response.json()
                // response => response.json() // if the response is a JSON object
            ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );
    }

    render() {
        return (
            <section>
                hello from Admin page
            </section>
        );
    }

};