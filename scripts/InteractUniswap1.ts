import { ethers } from "hardhat";

async function main() {
  
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOut = 3e6;
  const amountInMax = 6e6;

  const ethAmount = ethers.utils.parseEther("4000");

  const deadline = Math.floor(Date.now() / 1000) + (60 * 10);

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDTHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";

  await helpers.impersonateAccount(USDTHolder);
  const impersonatedSigner = await ethers.getSigner(USDTHolder);

  const Dai = await ethers.getContractAt("IERC20", DAIAddress, impersonatedSigner);
  
  const ROUTER = await ethers.getContractAt("IUnisawp", UNIRouter,impersonatedSigner);

  const daiBal = await Dai.balanceOf(USDTHolder);

  console.log("Dai balance befor swap :", daiBal);

  const approveDai = await Dai.approve(UNIRouter, amountInMax);
  const approvalResult = await approveDai.wait();
  console.log("approval reciept", approvalResult);
  
  
  //  First Interaction
  const swap = await ROUTER.swapExactETHForTokens(amountOut, [WETHAddress, DAIAddress], USDTHolder,deadline, {value: ethAmount} );

  const daiBal2 = await Dai.balanceOf(USDTHolder);

  console.log("Dai balance after Swap:", daiBal2);

  

  

  

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});