/*
INBOX TEST
*/

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require("../compile");
const provider = ganache.provider();
const web3 = new Web3(provider);

let accounts; 
let inbox;
let message;
let newMessage;


// use beforeEach to start a new account, deploy the contract, and send 
beforeEach( async () => {
	// get a list of all accounts

	accounts = await web3.eth.getAccounts();

	// use an account to deploy a contract

	// calling deploy _only creates_ the object
	// it is with `send` that the contract is actually deployed

	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ["Hithereptilebud"]})
		.send({ from: accounts[0], gas: '1000000' });
	// set the provider	
	inbox.setProvider(provider);
});

// start the test 
// check for an address in `.options.address`

describe("inbox", () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address); 

	});

	// verify the message
	it('hasMessage', async () => {
		const message = await inbox.methods.message().call();
		assert.equal(message, "Hithereptilebud");
	});


	// verify it can change the message
	// introducing the `send` method 
	it('canChangeMessages', async () => {
		await inbox.methods.setMessage("bye").send({ "from": accounts[0] });
		const message = await inbox.methods.message().call();
		assert.equal(message, "bye");

	})
});





