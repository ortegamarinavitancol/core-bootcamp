const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("TokenMo", [9999999999900000000000n]);

  await contract.waitForDeployment();

  console.log(`Deployed to ${contract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});