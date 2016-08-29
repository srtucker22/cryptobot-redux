require('babel-register')();
var injectTapEventPlugin = require('react-tap-event-plugin');
var jsdom = require('jsdom').jsdom;

try {
  injectTapEventPlugin();
} catch (e) {

}

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
