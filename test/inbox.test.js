const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require("../compile");
const web3 = new Web3(ganache.provider());

let accounts; 
let inbox;



beforeEach(async () => {
	// get a list of all accounts

	accounts = await web3.eth.getAccounts();

	// use an account to deploy a contract

	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ["Hithereptilebud"]})
		.send({ from: accounts[0], gas: '1000000' });

});

describe("inbox", () => {
	it('deploys a contract', () => {
		console.log(inbox); 
	});
});


