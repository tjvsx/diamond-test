const axios = require('axios');

// DIAMOND_ADDRESS='0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' //hardhat network
// DIAMOND_ADDRESS = '0xC63Dc87f9dD5D64224f7a2664ef22785ceDA6e78' //ropsten network -- adjust fullUrl to use
DIAMOND_ADDRESS='0x10e138877df69Ca44Fdc68655f86c88CDe142D7F' //BarnBridge

async function diamondLouper () {

  //diamondLoupe + Etherscan API
    const diamondLoupeFacet = await ethers.getContractAt('DiamondLoupeFacet', DIAMOND_ADDRESS)
    const facets = await diamondLoupeFacet.facets()

    for (const facet of facets) {
        const facetAddress = facet[0]
        const fullUrl = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${facetAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`
        const resp = await axios.get(fullUrl)
        const abi = JSON.parse(resp.data.result[0].ABI)
        // const code = resp.data.result[0].SourceCode
        const name = resp.data.result[0].ContractName

        let functions = []
        let events = []
        for (const obj of abi) {
        if(obj.type === 'function') {
            functions.push(obj.name)
        }
        if(obj.type === 'event') {
            events.push(obj.name)
        }
        }

        let obj = {
        name,
        facetAddress,
        functions,
        events
        }
        console.log(obj)
  }


}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    diamondLouper()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
  }
exports.diamondLouper = diamondLouper;