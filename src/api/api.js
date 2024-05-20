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
  uri: process.env.VITE_API_LINK
})
const adminHttpLink = errorLink.concat(httplink)

const ADMIN_API = getService(adminHttpLink)

export const API = {
  ADMIN_API
}

// const authHttpLink = errorLink.concat(httplink)

httplink = errorLink.concat(httplink)



export const graphqlClient = getService(httplink)

