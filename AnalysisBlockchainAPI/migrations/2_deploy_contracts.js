const StockData = artifacts.require("StockData");

module.exports = function(deployer) {
  deployer.deploy(StockData);
};
