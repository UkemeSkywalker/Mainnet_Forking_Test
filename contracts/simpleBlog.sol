// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract blog {

    address owner;

    struct blogTemplate{
        string postTitle;
        string postBody;
        address postAuthor;
    }

    mapping(uint256 => blogTemplate) blogId;

    uint256 counter = 0;

    function createPost(address _postAuthor, string memory _postTitle, string memory _postBody) public {
        blogTemplate storage blogPost = blogId[counter];

        blogPost.postTitle = _postTitle;
        blogPost.postBody = _postBody;
        blogPost.postAuthor = _postAuthor;

        counter++;
    }

    function getSinglePost(uint256 _counter) public view returns(blogTemplate memory){
        return blogId[_counter];
    }

}