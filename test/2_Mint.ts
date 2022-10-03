import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test Minting", function () {

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

        await NOES.toggleMintOpen();
    });


    it("Mint 5", async function () {
        await NOES.connect(addr1).mint(5);

        expect(await NOES.totalSupply()).to.equal(5);
        expect(await NOES.ownerOf(0)).to.equal(addr1.address);
        expect(await NOES.ownerOf(1)).to.equal(addr1.address);
        expect(await NOES.ownerOf(2)).to.equal(addr1.address);
        expect(await NOES.ownerOf(3)).to.equal(addr1.address);
        expect(await NOES.ownerOf(4)).to.equal(addr1.address);
    });

    it("Mint 30", async function () {
        await NOES.connect(addr2).mint(30);

        expect(await NOES.totalSupply()).to.equal(30);
        expect(await NOES.ownerOf(0)).to.equal(addr2.address);
        expect(await NOES.ownerOf(1)).to.equal(addr2.address);
        expect(await NOES.ownerOf(2)).to.equal(addr2.address);
        expect(await NOES.ownerOf(3)).to.equal(addr2.address);
        expect(await NOES.ownerOf(4)).to.equal(addr2.address);
        expect(await NOES.ownerOf(29)).to.equal(addr2.address);
    });

    it("Group Mint 200", async function () {
        await NOES.mint(30);
        await NOES.connect(addr1).mint(30);        
        await NOES.connect(addr2).mint(30);
        await NOES.mint(30);
        await NOES.connect(addr1).mint(30);        
        await NOES.connect(addr2).mint(30);
        await NOES.mint(20);

        expect(await NOES.totalSupply()).to.equal(200);
        expect(await NOES.balanceOf(addr1.address)).to.equal(60);
        expect(await NOES.balanceOf(addr2.address)).to.equal(60);
        expect(await NOES.balanceOf(owner.address)).to.equal(80);
    });
});