import { ethers } from "hardhat";

async function main() {

    const Blog = await ethers.getContractFactory("blog");
    const blog = await Blog.deploy();

    await blog.deployed();

    console.log("Contract deployed to:", blog.address);



    }

    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });