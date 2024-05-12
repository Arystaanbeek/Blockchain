// require('dotenv').config();
// const {Web3} = require('web3');
// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// async function fetchIntradayStockData(symbol) {

//     const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
//     console.log(`API Key: ${process.env.ALPHA_VANTAGE_API_KEY}`);

//     const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

//     try {
//         const response = await axios.get(url);
//         if (response.data["Time Series (5min)"]) {
//             const timeSeries = response.data["Time Series (5min)"];
//             const latestKey = Object.keys(timeSeries)[0];
//             const latestData = timeSeries[latestKey];
//             const historicalPrices = Object.values(timeSeries).map(day => parseFloat(day["4. close"]));
//             const data = {
//                 name: symbol,
//                 currentPrice: parseFloat(latestData["4. close"]),
//                 historicalPrices
//             };
//             console.log(data);  // Выводим полученные данные на консоль
//             return data;
// } else {
//     console.log('No data returned from API');
//     return null;
// }

//     } catch (error) {
//         console.error(`Error fetching intraday stock data for symbol ${symbol}:`, error);
//         return null;
//     }
// }

// app.get('/testFetch/:symbol', async (req, res) => {
//     const data = await fetchIntradayStockData(req.params.symbol);
//     if (data) {
//         res.json(data);
//     } else {
//         res.status(404).send('Data not found');
//     }
// });


// app.get('/getStockData/:symbol', async (req, res) => {
//     try {
//         console.log('Requesting data for symbol:', req.params.symbol);
//         const stockData = await stockDataContract.methods.getStockData(req.params.symbol).call();
//         console.log('Received data from blockchain:', stockData);
//         res.json({ success: true, data: stockData });
//     } catch (error) {
//         console.error("Ошибка при получении данных из блокчейна:", error);
//         res.status(500).send("Не удалось получить данные.");
//     }
// });

// function replacer(key, value) {
//     if (typeof value === 'bigint') { // Check if the value is a BigInt
//         return value.toString(); // Convert BigInt to string
//     } else {
//         return value; // Return the value unchanged if not a BigInt
//     }
// }

// app.get('/fetchStock/:symbol', async (req, res) => {
//     const data = await fetchIntradayStockData(req.params.symbol);
//     if (data) {
//         console.log('Received data:', data);
//         try {
//             const blockchainResult = await saveDataToBlockchain(req.params.symbol, data);
//             console.log('Data saved to blockchain:', blockchainResult);
//             // Use the replacer function in JSON.stringify to handle BigInt values
//             res.json(JSON.parse(JSON.stringify(blockchainResult, replacer)));
//         } catch (error) {
//             console.error("Error saving data to blockchain:", error);
//             res.status(500).send("Error saving data to the blockchain.");
//         }
//     } else {
//         res.status(404).send("Stock data not found.");
//     }
// });

// const contractABI = require('../build/contracts/StockData.json').abi;
// const contractAddress = '0x658A2fa74ce8494856E1e52F64E2edb0FCA9Da8b';
// const web3 = new Web3('http://localhost:8545');
// const stockDataContract = new web3.eth.Contract(contractABI, contractAddress);

// async function saveDataToBlockchain(symbol, data) {
//     const { name, currentPrice, historicalPrices } = data;
//     const priceAsInteger = Math.floor(currentPrice * 100);  // assuming you need to convert to cents
//     const historicalPricesAsIntegers = historicalPrices.map(price => Math.floor(price * 100));

//     const accounts = await web3.eth.getAccounts();

//     try {
//         const tx = await stockDataContract.methods.updateStockData(
//             symbol,
//             name,
//             priceAsInteger,
//             historicalPricesAsIntegers
//         ).send({ from: accounts[0], gas: 5000000 });  // Ensure you have enough gas

//         return tx;
//     } catch (error) {
//         console.error(`Failed to send transaction for symbol ${symbol}:`, error);
//         throw error;
//     }
// }

// // Fetch data from the blockchain
// async function fetchDataFromBlockchain(symbol) {
//     try {
//         const data = await stockDataContract.methods.getStockData(symbol).call();
//         return data;
//     } catch (error) {
//         console.error(`Error fetching data from blockchain for symbol ${symbol}:`, error);
//         return null;
//     }
// }


// require('dotenv').config();
// const {Web3} = require('web3');
// const express = require('express');
// const yahooFinance = require('yahoo-finance2').default;

// const app = express();
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// async function fetchIntradayStockData(symbol) {
//     try {
//         const queryOptions = { period1: '2022-01-01', period2: '2022-12-31', interval: '1d' }; // Пример настройки периода и интервала
//         const data = await yahooFinance.historical(symbol, queryOptions);
//         if (data.length > 0) {
//             const historicalPrices = data.map(day => ({ date: day.date, close: day.close }));
//             return {
//                 name: symbol,
//                 currentPrice: data[data.length - 1].close,
//                 historicalPrices
//             };
//         } else {
//             console.log('No data returned from API');
//             return null;
//         }
//     } catch (error) {
//         console.error(`Error fetching intraday stock data for symbol ${symbol}:`, error);
//         return null;
//     }
// }

// app.get('/fetchStock/:symbol', async (req, res) => {
//     const data = await fetchIntradayStockData(req.params.symbol);
//     if (data) {
//         console.log('Received data:', data);
//         res.json(data);
//     } else {
//         res.status(404).send("Stock data not found.");
//     }
// });

// // Оставшийся код сохранения данных в блокчейн и получения данных из блокчейна может оставаться неизменным
// const contractABI = require('../build/contracts/StockData.json').abi;
// const contractAddress = '0x658A2fa74ce8494856E1e52F64E2edb0FCA9Da8b';
// const web3 = new Web3('http://localhost:8545');
// const stockDataContract = new web3.eth.Contract(contractABI, contractAddress);

// async function saveDataToBlockchain(symbol, data) {
//     const { name, currentPrice, historicalPrices } = data;
//     const priceAsInteger = Math.floor(currentPrice * 100);  // assuming you need to convert to cents
//     const historicalPricesAsIntegers = historicalPrices.map(price => Math.floor(price * 100));

//     const accounts = await web3.eth.getAccounts();

//     try {
//         const tx = await stockDataContract.methods.updateStockData(
//             symbol,
//             name,
//             priceAsInteger,
//             historicalPricesAsIntegers
//         ).send({ from: accounts[0], gas: 5000000 });  // Ensure you have enough gas

//         return tx;
//     } catch (error) {
//         console.error(`Failed to send transaction for symbol ${symbol}:`, error);
//         throw error;
//     }
// }

// // Fetch data from the blockchain
// async function fetchDataFromBlockchain(symbol) {
//     try {
//         const data = await stockDataContract.methods.getStockData(symbol).call();
//         return data;
//     } catch (error) {
//         console.error(`Error fetching data from blockchain for symbol ${symbol}:`, error);
//         return null;
//     }
// }

require('dotenv').config();
const {Web3} = require('web3');
const express = require('express');
const yahooFinance = require('yahoo-finance2').default;

const app = express();
const port = 3000;
const web3 = new Web3('http://localhost:8545');
const contractABI = require('../build/contracts/StockData.json').abi;
const contractAddress = '0x658A2fa74ce8494856E1e52F64E2edb0FCA9Da8b';
const stockDataContract = new web3.eth.Contract(contractABI, contractAddress);

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

app.use(express.json()); // Ensure that Express can parse JSON request bodies

app.post('/fetchStock', async (req, res) => {
    const { symbol, startDate, endDate } = req.body;
    const data = await fetchIntradayStockData(symbol, startDate, endDate);
    if (data) {
        try {
            const blockchainResult = await saveDataToBlockchain(symbol, data);
            // Use the replacer function to properly serialize BigInt
            const response = JSON.stringify({ data, blockchainResult }, replacer);
            res.send(response); // send the stringified response with BigInt handling
        } catch (error) {
            console.error("Error saving data to blockchain:", error);
            res.status(500).send("Error saving data to the blockchain.");
        }
    } else {
        res.status(404).send("Stock data not found.");
    }
});

// Updated replacer function to handle more types if necessary
function replacer(key, value) {
    if (typeof value === 'bigint') {
        return value.toString(); // Convert BigInt to string
    }
    return value; // Return the value unchanged if not a BigInt
}

// Ensure your saveDataToBlockchain function properly formats all numbers before trying to send them to the blockchain
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
