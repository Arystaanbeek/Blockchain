require('dotenv').config();
const {Web3} = require('web3');
const express = require('express');
const cors = require('cors'); 
const yahooFinance = require('yahoo-finance2').default;


const app = express();
const port = 3000;
const web3 = new Web3('http://localhost:8545');
const contractABI = require('../build/contracts/StockData.json').abi;
const contractAddress = '0x658A2fa74ce8494856E1e52F64E2edb0FCA9Da8b';
const stockDataContract = new web3.eth.Contract(contractABI, contractAddress);

app.use(cors());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

async function fetchIntradayStockData(symbol, startDate, endDate) {
    try {
        const queryOptions = { period1: startDate, period2: endDate, interval: '1d' };
        const data = await yahooFinance.historical(symbol, queryOptions);
        if (data.length > 0) {
            const historicalPrices = data.map(day => ({
                date: day.date,
                close: parseFloat(day.close).toFixed(2)
            }));
            return {
                name: symbol,
                currentPrice: parseFloat(data[data.length - 1].close).toFixed(2),
                historicalPrices
            };
        } else {
            console.log('No data returned from API');
            return null;
        }
    } catch (error) {
        console.error(`Error fetching stock data for symbol ${symbol}:`, error);
        return null;
    }
}

app.use(express.json());

app.post('/fetchStock', async (req, res) => {
    const { symbol, startDate, endDate } = req.body;
    const data = await fetchIntradayStockData(symbol, startDate, endDate);
    if (data) {
        try {
            const blockchainResult = await saveDataToBlockchain(symbol, data);
            
            const response = JSON.stringify({ data, blockchainResult }, replacer);
            res.send(response);
        } catch (error) {
            console.error("Error saving data to blockchain:", error);
            res.status(500).send("Error saving data to the blockchain.");
        }
    } else {
        res.status(404).send("Stock data not found.");
    }
});

function replacer(key, value) {
    if (typeof value === 'bigint') {
        return value.toString(); 
    }
    return value; 
}

async function saveDataToBlockchain(symbol, data) {
    const priceAsInteger = Math.round(data.currentPrice * 100); // Convert to integer for blockchain
    const historicalPricesAsIntegers = data.historicalPrices.map(price => Math.round(price.close * 100));

    const accounts = await web3.eth.getAccounts();
    try {
        const tx = await stockDataContract.methods.updateStockData(
            symbol,
            data.name,
            priceAsInteger,
            historicalPricesAsIntegers
        ).send({ from: accounts[0], gas: 5000000 });
        return tx;
    } catch (error) {
        console.error(`Failed to send transaction for symbol ${symbol}:`, error);
        throw error;
    }
}
