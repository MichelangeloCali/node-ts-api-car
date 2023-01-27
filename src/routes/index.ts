import express, { Express } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'

export const routes = (app: Express) => {
  app.use(express.json(), categoriesRoutes, specificationsRoutes)
}
