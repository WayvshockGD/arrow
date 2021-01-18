let client = require('./core/ArrowClient');
let { properties: { token } } = require('../config.json');

let loader = require('./core/Loader');
let handler = require('./command/Handler')

let { arrow } = new client()

arrow.once('ready', () => { console.info( 'ready on ' + arrow.user.username ) })

//login
arrow.login(token)

//importing everything
let Client_Exception = require('../exceptions/clientException');

//then executing
new Client_Exception()

//command things
new handler()
new loader()