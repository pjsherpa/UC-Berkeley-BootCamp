# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

- TODO: Explain what each script does in the root-level `package.json` file:
  //start the server
  //the develop runs the server and client concurrently(together)
  //npm i the server the client folder
  //it seeds data up to the server
  //build the public folder and all the contents pushed in from src.

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

- TODO: Explain what this script does in the client-side `client/package.json` file:
  // helps us run the second server using concurrently

```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality

- TODO: Add a comment describing the functionality of this block of code in `server/server.js`:
  //this creates build folder makes, compreses the size of the folder to make it more effiecient and the webpage to run more faster.

```js
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
```

- TODO: Add a comment describing the functionality of this route in `server/server.js`:
  thats pushing up the webpage.

```js
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
```
