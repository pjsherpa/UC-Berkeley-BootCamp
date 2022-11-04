//line 7 makes auto complete easy on appolo model type def helps us to make less errors.

//line 17 defines what type of data it is

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
