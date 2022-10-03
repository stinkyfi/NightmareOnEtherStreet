import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-gas-reporter"
import "solidity-docgen";

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  gasReporter: {
    currency: "USD",
    token: "ETH",
    gasPrice: 100,    
    enabled: true,
    showTimeSpent: true,    
    coinmarketcap: ""
  },
  docgen: {},
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ""
  // }
};

export default config;