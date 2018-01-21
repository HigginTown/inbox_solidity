pragma solidity ^0.4.17;


// Simple Ethereum App to store a message on the Blockchain

// it's our friend .. HI THE REPTILE BUD}

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }

}

