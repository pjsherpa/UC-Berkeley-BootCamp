const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate("professor");
    },
    //Passing in an empty parent.
    class: async (_parent, args) => {
      return await Class.findById(args.id).professors("professor");
    },
    professors: async () => {
      return await Professor.find({});
    },
  },
};

module.exports = resolvers;
