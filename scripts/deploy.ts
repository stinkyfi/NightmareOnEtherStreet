import { ethers } from "hardhat";

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  let NOES = await ethers.getContractFactory("NightmareOnEtherStreet");
  NOES = await NOES.deploy();
  await NOES.deployed();

  console.log("\n -- Nightmare On Ether Street --\n");
  console.log("NOES address:", NOES.address, "\n");

  saveFrontendFiles(NOES.address);
}


function saveFrontendFiles(noes_address: any) {
  const fs = require("fs");
  const contractsDir = __dirname + "";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/abi/contract-addresses.json",
    JSON.stringify({ NOES: noes_address}, undefined, 2)
  );

  let NOESArtifact = artifacts.readArtifactSync("NightmareOnEtherStreet");

  fs.writeFileSync(
    contractsDir + "/abi/NOES.json",
    JSON.stringify(NOESArtifact, null, 2)
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
