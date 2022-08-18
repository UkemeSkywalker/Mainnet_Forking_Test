// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IUnisawp {
    function swapExactETHForTokens(
        uint amountOutMin, 
        address[] calldata path, 
        address to, 
        uint deadline)
        external  payable
  returns (uint[] memory amounts);
}