const fs = require("fs");
import { AbiCoder } from "@ethersproject/abi";
import { task } from "hardhat/config";

const basePath = "/contracts/facets/";
const libraryBasePath = "/contracts/libraries/";
// const sharedLibraryBasePath = "/contracts/shared/libraries/";

task(
  "diamondABI",
  "Generates ABI file for diamond, includes all ABIs of facets"
).setAction(async () => {
  let files = fs.readdirSync("." + basePath);
  let abi: AbiCoder[] = [];
  for (const file of files) {
    const jsonFile = file.replace("sol", "json");
    let json = fs.readFileSync(`./artifacts/${basePath}${file}/${jsonFile}`);
    json = JSON.parse(json);
    abi.push(...json.abi);
  }
  files = fs.readdirSync("." + libraryBasePath);
  for (const file of files) {
    const jsonFile = file.replace("sol", "json");
    let json = fs.readFileSync(
      `./artifacts/${libraryBasePath}${file}/${jsonFile}`
    );
    json = JSON.parse(json);
    abi.push(...json.abi);
  }
  // files = fs.readdirSync("." + sharedLibraryBasePath);
  // for (const file of files) {
  //   const jsonFile = file.replace("sol", "json");
  //   let json = fs.readFileSync(
  //     `./artifacts/${sharedLibraryBasePath}${file}/${jsonFile}`
  //   );
  //   json = JSON.parse(json);
  //   abi.push(...json.abi);
  // }
  let finalAbi = JSON.stringify(abi, null, 2);
  fs.writeFileSync("./artifacts/diamond/diamond.json", finalAbi);
  console.log(finalAbi)
  console.log("🎉 ABI written to artifacts/diamond/diamond.json 🎉");
});