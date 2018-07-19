import React from 'react';

export const Layout2 = (props) => {
    return (
        <html lang="en-US">
        <head>
            <meta charSet="UTF-8"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="images/favicon.ico"/>
            <title>The Official Website of Zohrab Aleksanyan</title>
            <link rel="stylesheet" href="/styles/bootstrap4/bootstrap.min.css"/>
            <link rel="stylesheet" href="/styles/fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.css"/>
            <link rel="stylesheet" href="/styles/animate.css-master/animate.min.css"/>
            <link rel="stylesheet" href="/styles/magic-master/magic.min.css"/>
            <link rel="stylesheet" href="/styles/text-resize.css"/>
            <link rel="stylesheet" href="/styles/main.css"/>
            <link rel="stylesheet" href="/styles/announcement.css"/>
            <link rel="stylesheet" href="/styles/home.css"/>
            <link rel="stylesheet" href="/styles/education.css"/>
            <link rel="stylesheet" href="/styles/portfolio.css"/>
            <link rel="stylesheet" href="/styles/social.css"/>
            <link rel="stylesheet" href="/styles/contact.css"/>
        </head>
        <body>
        {/*<h2>{props.title}</h2>*/}
        <section className="container-fluid my-container">{props.children}</section>
        <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
        <script src="/javascripts/react.bundle.js"></script>
        </body>
        </html>);
};