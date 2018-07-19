import React from 'react';

export const Login = props => {
    return (
        <section className="login">
            <h1 className="animated bounceInDown">Login</h1>
            <form method="post" action="/adminhome">
                <input type="text" name="u" placeholder="Username" required="required" className="animated bounceInRight"/>
                <input type="password" name="p" placeholder="Password" required="required" className="animated bounceInLeft"/>
                <button type="submit" className="btn btn-primary btn-block btn-large animated bounceInUp">Let me in.</button>
            </form>
        </section>
    );
};