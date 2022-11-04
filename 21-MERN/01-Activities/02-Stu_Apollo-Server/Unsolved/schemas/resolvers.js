const { Class } = require("../models");

// TODO: Add a comment describing the functionality of this expression
//Resolvers are per field functions that are given a parent object, arguments, and the execution context, and are responsible for returning a result for that field. Resolvers cannot be included in the GraphQL schema language, so they must be added separately. The collection of resolvers is called the "resolver map"
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      //getting all data from this call.
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
