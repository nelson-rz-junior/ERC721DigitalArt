var DigitalArt = artifacts.require("./DigitalArt.sol");

module.exports = (deployer, network, accounts) => {
    deployer.then(async () => {
        try {
            await deployer.deploy(DigitalArt, "DigitalArt", "DT");
        }
        catch (err) {
            console.log(('Failed to deploy contracts', err))
        }
    });
}