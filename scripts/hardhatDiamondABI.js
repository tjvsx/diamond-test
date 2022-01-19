const { FormatTypes } = require("ethers/lib/utils");

// DIAMOND_ADDRESS='0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' //hardhat network
// DIAMOND_ADDRESS = '0xC63Dc87f9dD5D64224f7a2664ef22785ceDA6e78' //ropsten network
DIAMOND_ADDRESS='0x10e138877df69Ca44Fdc68655f86c88CDe142D7F' //BarnBridge

async function hardhatDiamondABI () {
  const accounts = await ethers.getSigners()
  const contractOwner = accounts[0]

  //deployed diamond ABI 
  //gets the HardhatDiamond ABI through deployed Diamond's addresss
  const d0 = await hre.ethers.getContractFactory("HardhatDiamond", DIAMOND_ADDRESS, contractOwner); // contractOwner allows full interaction
  //to JSON...
  const diamond0 = JSON.parse(d0.interface.format(FormatTypes.json));

  //local diamond ABI
  const diamond1 = hre.artifacts.readArtifactSync("HardhatDiamond").abi;

  //outputs have some matching k/v pairs
  console.log('DIAMOND0:', diamond0, '\n', 'DIAMOND1:', diamond1)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  hardhatDiamondABI()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
  }
exports.hardhatDiamondABI = hardhatDiamondABI
