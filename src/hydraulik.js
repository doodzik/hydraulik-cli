var yargs     = require('yargs'),
    init      = require('../lib/init'),
    set       = require('../lib/set'),
    component = require('../lib/component')

var argv = yargs.usage('$0 command')
  .command('init'     , 'initilizen a new hydraulik application', init)
  .command('set'      , 'generates a new set'                   , set)
  .command('component', 'generates a new component'             , component)
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help')
  .argv

module.exports = argv
