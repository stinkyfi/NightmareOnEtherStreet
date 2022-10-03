import { expect } from "chai";
import { ethers } from "hardhat";

describe("Security Testing", function () {

    let NOES: any;
    let owner: any;
    let addr1: any;
    let addr2: any;
    let addrs: any;   

    beforeEach(async function() {
        NOES = await ethers.getContractFactory("NightmareOnEtherStreet");

        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        //Deploy KerberusVault.sol
        NOES = await NOES.deploy(addr2.address);
        await NOES.deployed();
    });


    it("Non-Owner attempts Mint while Closed", async function () {
        await expect(NOES.claim(5)).to.be.revertedWithCustomError;
    });

    it("Non-Owner attempt to update price", async function () {
        await expect(NOES.connect(addr1).updatePrice(5)).to.be.reverted;
    });

    it("Non-Owner attempt to activate mint", async function () {
        await expect(NOES.connect(addr1).updateHaunting()).to.be.reverted;
    });
});