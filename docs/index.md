# Solidity API

## NightmareOnEtherStreet

Version 0.1

_NOES is just a fun NFT that can be minted through our intereactive Trick-Or-Treating dApp._

### baseURI

```solidity
string baseURI
```

_baseURI for NFT Metadata_

### beneficiary

```solidity
address beneficiary
```

_Beneficiary Address_

### maxSupply

```solidity
uint256 maxSupply
```

_Max Supply_

### price

```solidity
uint256 price
```

_Mint Price_

### witchingHour

```solidity
bool witchingHour
```

_Minting Open/Close Flag_

### InsufficientFuends

```solidity
error InsufficientFuends()
```

_Throw if invalid payment amount_

### MintingClosed

```solidity
error MintingClosed()
```

_Throw if Minting is Closed_

### MintedOut

```solidity
error MintedOut()
```

_Throw if NFT is Minted Out_

### StatusChange

```solidity
event StatusChange(bool)
```

_Minting Status was Updated_

### constructor

```solidity
constructor(address benef) public
```

### claim

```solidity
function claim(uint256 quantity) external payable
```

_Public Mint NOES NFTs_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| quantity | uint256 | Number of NFTs to mint |

### updateHaunting

```solidity
function updateHaunting() external
```

_Toggles the mint status from on/off_

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view returns (string)
```

_Returns TokenURI for Marketplaces_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenId | uint256 | The ID of the Token you want Metadata for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | Link to Metadata |

### updatePrice

```solidity
function updatePrice(uint256 newPrice) external
```

_Update the Mint Price_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newPrice | uint256 | The new price of Mint |

### withdraw

```solidity
function withdraw() external
```

Withdraw funds

