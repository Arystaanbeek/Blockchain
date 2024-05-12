// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StockData {
    struct StockInfo {
        string name;
        uint256 currentPrice;
        uint256[] historicalPrices;
    }

    mapping(string => StockInfo) public stocks;

    event StockUpdated(string symbol, uint256 currentPrice, string name);

    function updateStockData(
        string calldata _symbol,
        string calldata _name,
        uint256 _currentPrice,
        uint256[] calldata _historicalPrices
    ) external {
        stocks[_symbol] = StockInfo({
            name: _name,
            currentPrice: _currentPrice,
            historicalPrices: _historicalPrices
        });
        emit StockUpdated(_symbol, _currentPrice, _name);
    }

    function getStockData(string calldata _symbol) external view returns (StockInfo memory) {
        return stocks[_symbol];
    }
}
