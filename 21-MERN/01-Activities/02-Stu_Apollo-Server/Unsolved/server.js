const express = require("express");
// TODO: Add a comment describing the functionality of this expression
//Redirects us to the apollo server client.
const { ApolloServer } = require("apollo-server-express");

// TODO: Add a comment describing the functionality of this expression
// Imports the two parts of a GraphQl Schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
//this is what gets our server running, Creates a new isntance of an apollo server with graphql schema

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// TODO: Add a comment describing this functionality
//call the async function to start the apollo server
startApolloServer(typeDefs, resolvers);
