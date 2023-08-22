export const loadMutation = (endpoint) => {
  return import(`./mutations/${endpoint}.graphql` /* @vite-ignore */).then(
    (module) => module.default
  )
}

export const loadQuery = (endpoint) => {
  return import(`./queries/${endpoint}.graphql` /* @vite-ignore */).then((module) => module.default)
}
