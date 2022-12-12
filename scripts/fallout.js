const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  const player = "0x4cEE6B545906e927Ea1f9f2f271f7db7e41328D9";
  const contractAdress = "0x108488E216524bd5140e9daB03264844cDfC0694";
  const contractAdressName = "Fallout";
  const signer = await hre.ethers.getSigner(player);
  const contract = await hre.ethers.getContractAt(
    contractAdressName,
    contractAdress,
    signer
  );
  console.table(contract.abi);
  // console.log("contract owner is ", await contract.owner())
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
