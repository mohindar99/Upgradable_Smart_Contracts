const { ethers, upgrades } = require("hardhat");

const PROXY = "0x1a4566FD257D6aA5FD24D8668EA2E3EC33907AE0";

async function main() { 
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();