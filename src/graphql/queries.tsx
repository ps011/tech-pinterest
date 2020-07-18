import { gql } from '@apollo/client';


export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`;
