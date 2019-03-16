# React Starter

## Getting started

Clone the project and run `npm i`

After this start the app with `npm start`. This will launch the webpack-dev-server with live reload.

### React + Webpack

The project is built with webpack and NPM scripts.

### CSS

CSS is processed with CSS-Next (CSS4) and is compiled in webpack with postcss.
For more info and the complete feature list see: http://cssnext.io/features/

### File loader

File-loader will convert you static images into base64 assets and allow you import them as modules into your components.
For more info: https://github.com/webpack/file-loader

### Build

Run `npm run build`

### Deploy

If you choose to deploy to a static host like Netlify you're done. If you choose another host like Heroku you will need to make sure the host supports node environments then use the `npm run createServer` script which will install express as a dependency of the app. This will then make use if the node `server.js` file included in the repo to run the app. You may need to specify this as the way to start your server on some hosts like AWS, eg. `node server.js` but most know to look for a server.js or index.js in the root directory of the project.
