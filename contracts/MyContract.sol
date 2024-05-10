// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract StockAnalysis {
    struct StockData {
        uint256 currentPrice;
        uint256[] historicalPrices;
        string name;
        string symbol;
        string issuer;
    }

    mapping(string => StockData) public stocks;

    function updateStock(string calldata _symbol, uint256 _currentPrice, uint256[] calldata _historicalPrices, string calldata _name, string calldata _issuer) external {
        stocks[_symbol] = StockData(_currentPrice, _historicalPrices, _name, _symbol, _issuer);
    }

    function getStock(string calldata _symbol) external view returns (StockData memory) {
        return stocks[_symbol];
    }
}
