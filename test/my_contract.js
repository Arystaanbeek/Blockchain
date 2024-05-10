const MyContract = artifacts.require("MyContract.sol");

contract('MyContract.sol', accounts => {
  let instance;

  before(async () => {
    instance = await MyContract.deployed();
  });

  it('should update stock data', async () => {
    await instance.updateStock("AAPL", 150, "Apple Inc.", "2021-01-01", "Apple");
    const result = await instance.getStock("AAPL");
    assert.equal(result[1], "Apple Inc.");  // Adjust according to the actual return structure
  });
});
