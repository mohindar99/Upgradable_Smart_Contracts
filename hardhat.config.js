require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.6",

  networks: {
    goerli: {
      url: `${process.env.REACT_APP_GOERLI_RPC_URL}`,
      accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};