module.exports = ({body, title = "", preloadedState}) => {
    return (
        `<!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
    </head>
    <body>
    <h2>${title}</h2>
    <section class="root">${body}</section>
     <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
    <script src="/javascripts/react.bundle.js"></script>
    </body>
    </html>`
    );
};
