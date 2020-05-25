/* eslint-disable */

import '../styles/main.sass'
import $ from 'jquery'
window.$ = $
import 'bootstrap/dist/js/bootstrap.js'
import './utils/home'
import './utils/footer'
import './utils/monitor'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
