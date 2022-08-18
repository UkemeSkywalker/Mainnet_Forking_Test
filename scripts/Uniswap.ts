import { ethers } from "hardhat";

async function main() {
  //interact with uniswap swapTokenforExactToken function
  //swap usdt to dai
  //TO-DO
  //erc20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token caling the function
  //check balance after swap.

  
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOut = 3e6;
  const amountInMax = 6e6;

  const deadline = Math.floor(Date.now() / 1000) + (60 * 10);

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDTHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";

  await helpers.impersonateAccount(USDTHolder);
  const impersonatedSigner = await ethers.getSigner(USDTHolder);

  const Dai = await ethers.getContractAt("IERC2", DAIAddress);
  
  const ROUTER = await ethers.getContractAt("IUnisawp", UNIRouter,impersonatedSigner);

  const approveDai = await Dai.Approve()

  

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});