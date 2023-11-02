import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
  users {
    fname
    lname
    active
    mobile
    city
  }
}
`;

export const SEARCH_USER = gql`
query SearchUser($search: String!) {
  searchUsers(search: $search) {
    fname
    lname
    active
    mobile
    city
  }
}

`;