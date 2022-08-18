// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Iblog{

     struct blogTemplate{
        string postTitle;
        string postBody;
        address postAuthor;
    }

    function createPost(address _postAuthor, string memory _postTitle, string memory _postBody) external ;
    function getSinglePost(uint256 _counter) external returns(blogTemplate memory);


}