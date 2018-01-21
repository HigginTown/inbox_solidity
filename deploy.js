const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	// connect with mneumonic 
	'hello era absent magnet affair debris journey circle pair tower assist orphan', 
	'https://rinkeby.infura.io/sc0PuylzLFhbMbKBeVb8'
	);

const web3 = new Web3(provider);

// write a func for async syntax

const deploy = async() => {
	// first get a list of all accounts

	const accounts = await web3.eth.getAccounts();

	// get account from mneumonic log

	console.log('Attempting to deploy from account', accounts[0]);

	// ABI comes in as JSON, need to create a JS object
	// let's deploy -- use data, args, etc
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hit the reptile bud']})
		.send({gas: '1000000', from: accounts[0]});



	// now check the addy of the contract 
	console.log('Contract deployed to', result.options.address);
};

deploy(); 