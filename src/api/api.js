import { createApp } from 'vue'
import App from '../App.vue'
import router from '@/router'

import { createPinia } from 'pinia'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { useDataStore } from '@/stores/data'
// import { HttpLink } from "@apollo/client";
import { HttpLink, fromPromise } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
// import { fromPromise } from "@apollo/client/link/http";
import { useToast } from 'vue-toastification'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const toast = useToast()

export const AUTH_CONTEXT = () => {
  const token = localStorage.getItem('token')
  return token ? `Bearer ${token}` : ''
}

let refreshed = {
  value: false
}

let operation = {
  type: '',
  name: '',
  variables: {},
  link: ''
}

export const logout = async (action) => {
  const store = useDataStore()
  const { mutate } = store
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')
  if (action === 'refresh') {
    try {
      refreshed.value = true
      let res = await mutate({
        endpoint: 'RefreshToken',
        data: {
          input: {
            refreshTokenId: refreshToken,
            tokenId: token
          }
        },
        service: 'AUTH'
        // queries: [{ query: "ListEmployees" }],
      })
      console.log(res, 'response')
      if (res.success) {
        refreshed.value = true
        localStorage.setItem('token', res.token)
        localStorage.setItem('refreshToken', res.refreshToken)

        const accessToken = res.token
        return accessToken
      } else {
        console.log('Refresh token did not work, so...')

        toast.error(`Logging User Out`)

        localStorage.removeItem('token')
        localStorage.removeItem('companyDetails')

        store.$patch({
          isLoggedIn: false
        })

        store.$reset()

        router.push('/auth/login')
      }
    } catch (e) {
      toast.error(`Logging User Out`)

      localStorage.removeItem('token')
      localStorage.removeItem('companyDetails')

      store.$patch({
        isLoggedIn: false
      })

      store.$reset()

      router.push('/auth/login')
    }
  } else {
    toast.error(`Logging User Out`)

    localStorage.removeItem('token')
    localStorage.removeItem('companyDetails')

    store.$patch({
      isLoggedIn: false
    })

    store.$reset()

    router.push('/auth/login')

    // localStorage.removeItem("token");
    // localStorage.removeItem("companyDetails");
    // localStorage.removeItem("privilege");
    // localStorage.removeItem("accountType");
    // localStorage.removeItem("companyId");
    // store.$patch({
    //   isLoggedIn: false,
    // });

    // store.$reset();
    // store.commit("set", {
    //   type: "isLoggedIn",
    //   data: false,
    // });
    // store.commit("set", {
    //   type: "applicant",
    //   data: "",
    // });
    // store.commit("set", {
    //   type: "UpdateNewLevel",
    //   data: {},
    // });

    // window.localStorage.clear("vuex");

    // router.push("/");
  }
}

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError, operation, forward } = errors
  console.log('handling errors ---', errors)

  if (graphQLErrors && graphQLErrors.length > 0) {
    let e = graphQLErrors[0]
    //check for bad user input
    if (e.message.includes('Bad user input')) {
      toast.error('Please check your input')
    }

    // if (e.extensions["code"] === "INTERNAL_SERVER_ERROR") {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'INVALID_TOKEN':
          return fromPromise(
            logout('refresh').catch((error) => {
              logout('logout')
              // Handle token refresh errors e.g clear stored tokens, redirect to login
              return error
            })
          )
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              const oldHeaders = operation.getContext().headers
              // modify the operation context with a new token
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`
                }
              })

              // retry the request, returning the new observable
              return forward(operation)
            })
      }
    }
  }

  if (networkError) {
    toast.error(networkError.message)
  }
})

function getService(link) {
  const API = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      }
    }
  })
  operation.link = link

  return API
}

let httplink = new HttpLink({
  // uri: `http://localhost:4000/graphql`,
  uri: `https://adminservice-bef4ca48917ea5c5.onporter.run/graphql`
  // uri: `https://eazipay-authentication-vety3kdfea-uc.a.run.app/graphql`, //Old Auth Link
})
const adminHttpLink = errorLink.concat(httplink)

const ADMIN_API = getService(adminHttpLink)

export const API = {
  ADMIN_API
}

// const authHttpLink = errorLink.concat(httplink)

httplink = errorLink.concat(httplink)

// const httplink_emp = new HttpLink({
//   // uri: `http://localhost:4001/graphql`,
//   uri: `https://eazipay-employee-v3-vety3kdfea-uc.a.run.app/graphql`
//   // uri: `https://eazihires-emp.herokuapp.com/graphql`,
// })
// const empHttpLink = errorLink.concat(httplink_emp)

// const httplink_payroll = new HttpLink({
//   // uri: `http://localhost:4002/graphql`,
//   uri: `https://eazipay-payroll-v3-vety3kdfea-uc.a.run.app/graphql`
//   // uri: `https://eazihires-payroll.herokuapp.com/graphql`,
// })
// const payrollHttpLink = errorLink.concat(httplink_payroll)

// const httplink_performance = new HttpLink({
//   uri: `https://eazipay-performance-vety3kdfea-uc.a.run.app/graphql`
//   // uri: `https://eazihires-performance.herokuapp.com/graphql`,
// })
// const performanceHttpLink = errorLink.concat(httplink_performance)

// const httpLink_settings = new HttpLink({
//   // uri: `http://localhost:4004/graphql`,
//   uri: `https://eazipay-settings-v3-vety3kdfea-ew.a.run.app/graphql`
// })
// const settingsHttpLink = errorLink.concat(httpLink_settings)

// const httpLink_bookKeeping = new HttpLink({
//   uri: `https://eazipay-bookkeeping-vety3kdfea-uc.a.run.app/graphql`
// })
// const bookKeepingHttpLink = errorLink.concat(httpLink_bookKeeping)

// const httpLink_loan = new HttpLink({
//   uri: `https://eazipay-loan-v3-vety3kdfea-uc.a.run.app/graphql`
// })
// const loanHttpLink = errorLink.concat(httpLink_loan)

export const graphqlClient = getService(httplink)

// const EMP_API = getService(empHttpLink)
// const PAYROLL_API = getService(payrollHttpLink)
// const PERFORMANCE_API = getService(performanceHttpLink)
// const SETTINGS_API = getService(settingsHttpLink)
// const BOOKKEEPING_API = getService(bookKeepingHttpLink)
// const LOAN_API = getService(loanHttpLink)

// export const API = {
//   AUTH_API,
//   EMP_API,
//   PAYROLL_API,
//   PERFORMANCE_API,
//   SETTINGS_API,
//   BOOKKEEPING_API,
//   LOAN_API
// }
