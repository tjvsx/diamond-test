const { FormatTypes } = require("ethers/lib/utils");

async function hardhatDiamondABI () {
  const accounts = await ethers.getSigners()
  const contractOwner = accounts[0]

  //deployed diamond ABI 
  //gets the HardhatDiamond ABI through deployed Diamond's addresss
  const d0 = await hre.ethers.getContractFactory("HardhatDiamond", process.env.DIAMOND_ADDRESS, contractOwner); // contractOwner allows full interaction
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
