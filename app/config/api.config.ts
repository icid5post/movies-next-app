export const API_URL = `${process.env.APP_URL}/api`

export const getGenresUrls = (string: string) => `/genres${string}`
export const getAuthUrls = (string: string) => `/auth${string}`
export const getMoviesUrls = (string: string) => `/movies${string}`
export const getActorsUrls = (string: string) => `/actors${string}`
export const getRatingsUrls = (string: string) => `/ratings${string}`