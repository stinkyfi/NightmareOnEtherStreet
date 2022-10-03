// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

/// Contract @title: Nightmare On Ether Street
/// Contract @author: Stinky (@nomamesgwei)
/// Description @dev: NOES is just a fun NFT that can be minted through our intereactive Trick-Or-Treating dApp.
/// Version @notice: 0.1

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract NightmareOnEtherStreet is ERC721A, Ownable   {

    /// @dev Minting Open/Close Flag
    bool public mintOpen;
    /// @dev Mint Price
    uint256 public mintPrice = 0.006 ether;
    /// @dev Max Supply
    uint256 immutable public maxSupply = 6669;

    /// @dev Throw if Minting is Closed
    error MintingClosed();
    /// @dev Throw if NFT is Minted Out
    error MintedOut();
    /// @dev Minting Status was Updated
    event statusChange(bool);

    constructor() ERC721A("Nightmare On Ether Street", "NOES") 
    {
        mintOpen = false;
    }

    /// @dev Public Mint NOES NFTs
    /// @param quantity Number of NFTs to mint
    function mint(uint256 quantity) external payable {
        if(!mintOpen) { revert MintingClosed(); }
        if(_totalMinted() + quantity > maxSupply) { revert MintedOut(); }
        _mint(msg.sender, quantity);
    }

    /// @notice Toggles the mint status from on/off
    function toggleMintOpen() external onlyOwner {
        if(mintOpen)
            emit statusChange(true);
        else
            emit statusChange(false);        
        mintOpen = !mintOpen;
    }

    function updatePrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }
}