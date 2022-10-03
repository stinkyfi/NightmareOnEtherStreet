// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

/// Contract @title: Nightmare On Ether Street
/// Contract @author: Stinky (@nomamesgwei)
/// Description @dev: NOES is just a fun NFT that can be minted through our intereactive Trick-Or-Treating dApp.
/// Version @notice: 0.1

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract NightmareOnEtherStreet is ERC721A, Ownable   {

    /// @dev Max Supply
    uint256 immutable public maxSupply = 6669;
    /// @dev Minting Open/Close Flag
    bool public witchingHour;
    /// @dev Mint Price
    uint256 public price = 0.006 ether;
    /// @dev baseURI for NFT Metadata
    string public baseURI;

    /// @dev Throw if Minting is Closed
    error MintingClosed();
    /// @dev Throw if NFT is Minted Out
    error MintedOut();
    /// @dev Minting Status was Updated
    event StatusChange(bool);

    constructor() ERC721A("Nightmare On Ether Street", "NOES") 
    {
        witchingHour = false;
        baseURI = "";
    }

    /// @dev Public Mint NOES NFTs
    /// @param quantity Number of NFTs to mint
    function claim(uint256 quantity) external payable {
        if(!witchingHour) { revert MintingClosed(); }
        if(_totalMinted() + quantity > maxSupply) { revert MintedOut(); }
        _mint(msg.sender, quantity);
    }

    /// @dev Toggles the mint status from on/off
    function updateHaunting() external onlyOwner {
        if(witchingHour)
            emit StatusChange(true);
        else
            emit StatusChange(false);        
        witchingHour = !witchingHour;
    }

    /// @dev Returns TokenURI for Marketplaces
    /// @param tokenId The ID of the Token you want Metadata for
    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        return string(abi.encodePacked(baseURI, _toString(tokenId)));
    }

    /// @dev Update the Mint Price
    /// @param newPrice The new price of Mint
    function updatePrice(uint256 newPrice) external onlyOwner {
        price = newPrice;
    }
}