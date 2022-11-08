import { gql } from "@apollo/client";
// # TODO: Add a query called 'getThoughts' that returns a thought's _id, thoughtText, thoughtAuthor, and createdAt fields
export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
    }
  }
`;
