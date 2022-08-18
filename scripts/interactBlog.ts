import { ethers } from "hardhat";

async function main() {

    

    const CONTRACTADDRESS = "0xb4eA7D9bc09f5B7F5702245467493301C1ebcE0b";

    const Blog = await ethers.getContractAt("Iblog", CONTRACTADDRESS);

    const author = "0xEd521548b91C5e4f58bCc1f30dE9691eff517048";
    const postTitle = "Class Intuition";
    const postBody = "The mind of internal bliss";

    const createBlog = await Blog.createPost(author, postTitle, postBody);
    const blogResult = await createBlog.wait();

    console.log("Blog Posted", blogResult);

    const getSinglePost = await Blog.getSinglePost(1);
    const postResult = await getSinglePost.wait();
    console.log("Get Single Post:", postResult);



    // Simple Blog
    // Contract deployed to: 0xb4eA7D9bc09f5B7F5702245467493301C1ebcE0b
    // Txn Hash 1: 0x11f8b0ba198c786043338b4da7fbb36fb772f7f8a50a9b9e1bbc17586f6fc21d
    // Tnx Hash 2: 0xccbb4f10395cdf5807e97062159100274b9f37b93e900d89a9446124bbf29804
    // Tnx Hash 3: 0x99bb080fbb4fd8e14715899b6fa1dcf41d2bb6416b40b1dde1734f6bfd7cc559


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });