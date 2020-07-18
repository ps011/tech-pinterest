import { gql } from '@apollo/client';



// export const LOGIN_MUTATION = (email: string, password: string) => {
//   return gql`
//   {
//   mutation LoginMutation($email: ${email}, $password: ${password}) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
//  }
// `
// }

export const LOGIN_MUTATION = (email: string, password: string) => {
    return   gql`
    {
      mutation(email: anjali, password: anjali) {
        token
      }
    }
    `
  }

export const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`
