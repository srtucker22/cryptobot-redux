if (process.env.NODE_ENV === 'production') {
  module.exports = require('./root.prod.component');
} else {
  module.exports = require('./root.dev.component');
}
