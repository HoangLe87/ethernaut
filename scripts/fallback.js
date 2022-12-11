const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  const player = "0x4cEE6B545906e927Ea1f9f2f271f7db7e41328D9";
  const contractAdress = "0xa9C33DcFab2fBC25c3Ac7efFdf58c7eCEddDEd18";
  const contractAdressName = "Fallback";
  const signer = await hre.ethers.getSigner(player);
  const contract = await hre.ethers.getContractAt(
    contractAdressName,
    contractAdress,
    signer
  );
  // get initila balances

  console.log("=== INITAL DATA ===");
  let balance = await hre.ethers.provider.getBalance(player);
  console.log("player balance is %s wei", String(balance));
  let getPlayerContributions = await contract.contributions(player);
  console.log("player contributions is %s wei", String(getPlayerContributions));
  const getOwnerContributions = await contract.contributions(contract.owner());
  console.log(
    "owner contributions is %i ether",
    ethers.utils.formatEther(getOwnerContributions)
  );

  // perform contribution
  console.log("=== PERFORMING CONTRIBUTE ===");
  await contract.contribute({
    value: ethers.utils.parseEther("0.0001"),
  });

  console.log("=== AFTER DATA ===");
  getPlayerContributions = await contract.contributions(player);
  console.log("player contributions is %s wei", String(getPlayerContributions));
  console.log("owner is", await contract.owner());

  //send transactions

  console.log("=== SENDING TX ===");
  signer.sendTransaction({
    to: contractAdress,
    value: ethers.utils.parseEther("0.0001"),
  });
  console.log("owner is", await contract.owner());

  balance = await hre.ethers.provider.getBalance(player);
  console.log("player balance is %s wei", String(balance));
  let contractBalance = await hre.ethers.provider.getBalance(contractAdress);
  console.log("contract balance is %s wei", String(contractBalance));
  console.log("=== WITHDRAWING FUNDS ===");
  await contract.withdraw();
  balance = await hre.ethers.provider.getBalance(player);
  console.log("player balance is %s wei", String(balance));

  contractBalance = await hre.ethers.provider.getBalance(contractAdress);
  console.log("contract balance is %s wei", String(contractBalance));
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
