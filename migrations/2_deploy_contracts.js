const StockRegistry = artifacts.require("MyContract.sol");

module.exports = function (deployer) {
  deployer.deploy(StockRegistry);
};