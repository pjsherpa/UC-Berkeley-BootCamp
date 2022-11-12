import { gql } from "@apollo/client";
//asks what it wants the front end is getting back.
// this is linked with the resolver
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;
