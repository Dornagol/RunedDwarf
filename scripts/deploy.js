const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploy with the address:", deployer.address);

    const RunedDwarf = await ethers.getContractFactory("RunedDwarf");
    // On passe uniquement l'adresse du déployeur comme initialOwner
    const runedDwarf = await RunedDwarf.deploy(deployer.address);

    await runedDwarf.waitForDeployment();
    console.log("Token deployed at:", await runedDwarf.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });