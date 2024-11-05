require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-web3-v4");
require("dotenv").config();
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "swisstronik",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["0x" + process.env.PRIVATE_KEY], //Your private key starting with "0x"
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
