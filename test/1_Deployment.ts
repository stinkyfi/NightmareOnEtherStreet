import { expect } from "chai";
import { ethers } from "hardhat";

describe("Deploy & Initiliaze", function () {

  let NOES: any;
  let owner: any;
  let addr1: any;
  let addr2: any;
  let addrs: any;

  beforeEach(async function() {
    NOES = await ethers.getContractFactory("NightmareOnEtherStreet");

    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    //Deploy KerberusVault.sol
    NOES = await NOES.deploy();
    await NOES.deployed();
  });

  it("Validate Deployment", async function () {
    expect(await NOES.price()).to.be.equal(ethers.utils.parseEther("0.006"));
    expect(await NOES.owner()).to.be.equal(owner.address);
    expect(await NOES.witchingHour()).to.be.equal(false);
  });
});