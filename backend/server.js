'use strict'
console.clear()

import mongoose from 'mongoose'

import app from './express.js'
import config from '../config/config.js'

// connect to database
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`MongoDB connected`)
  })
  .catch((err) => {
    console.log(err)
    process.exit(0)
  })

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
