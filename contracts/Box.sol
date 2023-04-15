// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Box{

    uint public val;

    // In upgradable contracts the state variables inside implementaion are never used.  
    // The state variable should be in the same order of version 1 in V2
    // constructor(uint _val){
    //    val=_val;
    //}

    function initialize(uint _val) external {
        val=_val;
    }
}