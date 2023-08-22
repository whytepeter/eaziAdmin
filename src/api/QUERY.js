// import { API, AUTH_CONTEXT } from "./api";
import { AUTH_CONTEXT, graphqlClient } from './api'
import { loadQuery } from './utils'

export default async (endpoint, payload) => {
  let token = localStorage.getItem('token')
  let context = {}
  if (token !== '' && token !== null && token !== undefined) {
    context.headers = {
      authorization: AUTH_CONTEXT()
    }
  }

  const PAYLOAD = {
    query: await loadQuery(endpoint),
    variables: payload,
    context
  }

  return graphqlClient.query(PAYLOAD).then((result) => {
    return result.data[endpoint]
  })

  /*
  if (service == 'AUTH') {
    return API.AUTH_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'EMP') {
    return API.EMP_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'PAYROLL') {
    return API.PAYROLL_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'PERFORMANCE') {
    return API.PERFORMANCE_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'SETTINGS') {
    return API.SETTINGS_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'BOOKKEEPING') {
    return API.BOOKKEEPING_API.query(PAYLOAD).then((result) => result.data[endpoint])
  } else if (service == 'LOAN') {
    return API.LOAN_API.query(PAYLOAD).then((result) => result.data[endpoint])
  }
  */
}
