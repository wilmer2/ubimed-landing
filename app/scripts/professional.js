import '../styles/professional.sass'

import 'bootstrap/dist/js/bootstrap.bundle'
import './utils/home'
import './utils/footer'

if (process.env.NODE_ENV !== 'production') {
  require('../professional.pug')
}
