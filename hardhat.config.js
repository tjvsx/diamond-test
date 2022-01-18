require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-diamond-abi");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task(
  "blockNumber",
  "Prints the current block number",
  async (_, { ethers }) => {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log("Current block number: " + blockNumber);
    });
  }
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mainnet",
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `${process.env.ALCHEMY_ROPSTEN_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `${process.env.ALCHEMY_MAINNET_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    } 
  },
  diamondAbi: {
    // (required) The name of your Diamond ABI
    name: "HardhatDiamond",

    // (optional) An array of strings, matched against fully qualified contract names, to
    // determine which contracts are included in your Diamond ABI.
    include: ["Facet"],
    // (optional) An array of strings, matched against fully qualified contract names, to
    // determine which contracts are excluded from your Diamond ABI.
    exclude: ["vendor"],
    // (optional) A function that is called with the ABI element, index, entire ABI,
    // and fully qualified contract name for each item in the combined ABIs.
    // If the function returns `false`, the function is not included in your Diamond ABI.
    filter: function (abiElement, index, fullAbi, fullyQualifiedName) {
      return abiElement.name !== "superSecret";
    },
    // (optional) Whether exact duplicate sighashes should cause an error to be thrown,
    // defaults to true.
    strict: true,
  },
};
