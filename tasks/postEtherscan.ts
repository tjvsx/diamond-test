const fs = require("fs");
// const fetch = require("node-fetch");
// import { AbiCoder } from "@ethersproject/abi";
import { task } from "hardhat/config";

const diamondPath = "/contracts/"
const basePath = "/contracts/facets/";
const libraryBasePath = "/contracts/libraries/";
// const sharedLibraryBasePath = "/contracts/shared/libraries/";

task(
  "diamondVerify",
  "Verifies Diamond Contracts"
).setAction(async () => {

    // let string = ""

    // let files = fs.readdirSync("." + diamondPath);
    // for (const file of files) {
    //     if (file === "Diamond.sol") {
    //         const jsonFile = file.replace("sol", "json");
    //         let json = fs.readFileSync(`./artifacts/${diamondPath}${file}/${jsonFile}`);
    //         json = JSON.parse(json);
    //         string = json;
    //     }
    // }

    // // const finalAbi = JSON.stringify(string, null, 2);
    // console.log(string)


    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // var urlencoded = new URLSearchParams();
    // urlencoded.append("apikey", "KT6Q292E4UCS5UPZNRI4KABD4J3AB1MF76");
    // urlencoded.append("module", "contract");
    // urlencoded.append("action", "verifysourcecode");
    // urlencoded.append("sourceCode", "pragma solidity ^0.8.0;\n\ncontract Greeter {\n    string private greeting;\n\n    function greet() public view returns (string memory) {\n        return greeting;\n    }\n\n    function setGreeting(string memory _greeting) public {\n        greeting = _greeting;\n    }\n\n    function setGreetingDefault() public {\n        greeting = 'default';\n    }\n}\n");
    // urlencoded.append("contractaddress", "0xC63Dc87f9dD5D64224f7a2664ef22785ceDA6e78");
    // urlencoded.append("codeformat", "solidity-single-file");
    // urlencoded.append("contractname", "Diamond");
    // urlencoded.append("compilerversion", "v0.8.4+commit.c7e474f2");
    // urlencoded.append("optimizationUsed", "0");

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: urlencoded,
    //   redirect: 'follow'
    // };

    // fetch("https://api-ropsten.etherscan.io/api", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));



//   let abi: AbiCoder[] = [];
//   for (const file of files) {
//     const jsonFile = file.replace("sol", "json");
//     let json = fs.readFileSync(`./artifacts/${basePath}${file}/${jsonFile}`);
//     json = JSON.parse(json);
//     abi.push(...json.abi);
//   }
//   files = fs.readdirSync("." + libraryBasePath);
//   for (const file of files) {
//     const jsonFile = file.replace("sol", "json");
//     let json = fs.readFileSync(
//       `./artifacts/${libraryBasePath}${file}/${jsonFile}`
//     );
//     json = JSON.parse(json);
//     abi.push(...json.abi);
//   }
//   files = fs.readdirSync("." + sharedLibraryBasePath);
//   for (const file of files) {
//     const jsonFile = file.replace("sol", "json");
//     let json = fs.readFileSync(
//       `./artifacts/${sharedLibraryBasePath}${file}/${jsonFile}`
//     );
//     json = JSON.parse(json);
//     abi.push(...json.abi);
//   }
//   let finalAbi = JSON.stringify(abi, null, 2);
//   fs.writeFileSync("./artifacts/diamond/diamond.json", finalAbi);
//   console.log(finalAbi)
//   console.log("🎉 ABI written to artifacts/diamond/diamond.json 🎉");
});