const StockData = artifacts.require("StockData");

contract("StockData", accounts => {
    it("should store and retrieve stock data", async () => {
        const stockDataInstance = await StockData.deployed();
        await stockDataInstance.updateStockData("AAPL", web3.utils.toBN(100), [web3.utils.toBN(95), web3.utils.toBN(98)], "Apple Inc.");
        
        const result = await stockDataInstance.getStockData("AAPL");
        console.log(result);

        assert.equal(result.currentPrice.toString(), '100', "The current price should be 100.");
        assert.equal(result.name, "Apple Inc.", "The name should match Apple Inc.");
        assert.deepEqual(result.historicalPrices.map(x => x.toString()), ['95', '98'], "Historical prices should match [95, 98]");
    });
});
