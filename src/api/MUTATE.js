// import { API, AUTH_CONTEXT } from "./api";
import { graphqlClient, AUTH_CONTEXT } from './api'
import { loadMutation } from './utils'

export default async (endpoint, data, service) => {
  let token = localStorage.getItem('token')
  let context = {}
  if (token !== '' && token !== null && token !== undefined) {
    context.headers = {
      authorization: AUTH_CONTEXT()
    }
  }
  const mutation = await loadMutation(endpoint)

  const PAYLOAD = {
    mutation: mutation,
    variables: data,
    // refetchQueries: [{ query: "ListEmployees" }],
    context
  }

  return graphqlClient.mutate(PAYLOAD).then((result) => result.data[endpoint])

  /*

  if (service == 'AUTH') {
    return API.AUTH_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'EMP') {
    return API.EMP_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'PAYROLL') {
    return API.PAYROLL_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'PERFORMANCE') {
    return API.PERFORMANCE_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'SETTINGS') {
    return API.SETTINGS_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'BOOKKEEPING') {
    return API.BOOKKEEPING_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'LOAN') {
    return API.LOAN_API.mutate(PAYLOAD).then((result) => result.data[endpoint])
  }
  */
}
