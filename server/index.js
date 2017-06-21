import Nuxt from 'nuxt'
import express from 'express'

// import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
// app.use('/api', api)

app.get('/', (req, res, next) => {
  const userAgentInfo = req.headers['user-agent'] // 获取user-agent
  const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
  let mobile_pc = 'pc' // pc端返回pc，移动端返回mobile
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      mobile_pc = 'mobile'
      break
    }
  }
  if (mobile_pc === 'mobile') {
    res.redirect('/m')
  } else {
    next()
  }
})

// Start nuxt.js
async function start() {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()