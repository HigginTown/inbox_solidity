const path = require('path');
const fs = require('fs');
const solc = require('solc')


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');


// add module.exports to get access to the compiled source

module.exports = solc.compile(source, 1)


