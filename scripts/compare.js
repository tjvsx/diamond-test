const { FormatTypes } = require("ethers/lib/utils");

async function diamondCompare () {
  const accounts = await ethers.getSigners()
  const contractOwner = accounts[0]

//deployed diamond ABI 
//(run: npx hardhat run scripts/deploy.js and grab address)
DIAMOND_ADDRESS='0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
//gets the HardhatDiamond ABI through deployed Diamond's addresss
const d0 = await hre.ethers.getContractFactory("HardhatDiamond", DIAMOND_ADDRESS, contractOwner); // contractOwner allows full interaction
//to JSON...
const diamond0 = JSON.parse(d0.interface.format(FormatTypes.json));

//local diamond ABI
const diamond1 = hre.artifacts.readArtifactSync("HardhatDiamond").abi;

//outputs are similar
console.log(diamond0)
console.log(diamond1)

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    diamondCompare()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
  }
  
exports.diamondCompare = diamondCompare