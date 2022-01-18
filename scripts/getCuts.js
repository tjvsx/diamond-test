ETHERSCAN_API_KEY = 'KT6Q292E4UCS5UPZNRI4KABD4J3AB1MF76'

// diamonds for testing
DIAMOND_ADDRESS = '0x10e138877df69Ca44Fdc68655f86c88CDe142D7F' //BarnBridge Mainnet

async function getCuts () {
    const accounts = await ethers.getSigners()
    const contractOwner = accounts[0]
    //deployed diamond ABI 
    //gets the HardhatDiamond ABI through deployed Diamond's addresss
    const d0 = await hre.ethers.getContractFactory("HardhatDiamond", process.env.DIAMOND_ADDRESS, contractOwner); // contractOwner allows full interaction


    // diamondCut event logs
    // 'event DiamondCut(tuple(address facetAddress, uint8 action, bytes4[] functionSelectors)[] _diamondCut, address _init, bytes _calldata)',
    const event = d0.interface.getEventTopic("DiamondCut");
    const logs = await hre.ethers.provider.getLogs({
        fromBlock: 11111111,
        toBlock: 'latest',
        address: DIAMOND_ADDRESS,
        topics: [event]
    })

    for (const log of logs) {
        const data = log.data
        const topics = log.topics
        const parsed = d0.interface.parseLog({ data, topics })

        console.log(JSON.stringify(parsed.args, null, 2))
    }

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    getCuts()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
  }
exports.getCuts = getCuts;