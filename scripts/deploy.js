require ("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");

async function main() { 
    const Box = await ethers.getContractFactory("Box");

    const box = await upgrades.deployProxy(Box, [42], {
        initializer: "initialize",
    });

    await box.deployed();

    console.log("Box deployed to :",box.address);
}

main();