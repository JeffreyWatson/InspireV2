// @ts-ignore
export const imagesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  setTimeout: 12000
})

// @ts-ignore
export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  setTimeout: 12000
})

// @ts-ignore
export const tasksApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jefe/todos',
  setTimeout: 12000
})

// @ts-ignore
export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  setTimeout: 12000
})