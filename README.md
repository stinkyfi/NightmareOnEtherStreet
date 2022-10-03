# <img src="https://github.com/stinkyfi/NightmareOnEtherStreet/blob/main/images/NOES-Logo.gif" width="35">Nightmare On Ether St. <img src="https://github.com/stinkyfi/NightmareOnEtherStreet/blob/main/images/NOES-Logo.gif" width="35">

[![Hardhat Test](https://github.com/stinkyfi/NightmareOnEtherStreet/actions/workflows/NOES.yml/badge.svg)](https://github.com/stinkyfi/NightmareOnEtherStreet/actions/workflows/NOES.yml) ![GitHub followers](https://img.shields.io/github/followers/stinkyfi?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/nomamesgwei?style=social)

Nightmare On Ether St. is a trick-or-treat themed minting experience. There is a max supply of 6669 Total Tricks and Treats.
You can mint one for `0.006` Ether on Halloween Weekened

# Developer Notes 

## Install Requirements

The first steps are to clone the repository and install its dependencies:

```sh
https://github.com/stinkyfi/NightmareOnEtherStreet.git
cd NightmareOnEtherStreet
npm install
```

Make a copy of the sample hardhat config file, git ignores the hardhatconfig file.
This file is sensitive, because it may contain private keys
```sh
cp sample.hardhat.config.js hardhat.config.js
```

## Test
On a new terminal, go to the repository's root folder and run this to
test the contract:

```sh
npx hardhat test
```

## Deploy Test
On a new terminal, go to the repository's root folder and run this to
deploy the contract test:

```sh
npx hardhat run scripts/deploy_test.js --network <network>
```
