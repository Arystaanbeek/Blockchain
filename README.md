# StockData: Blockchain-based Stock Information Storage

## Project Description

The `StockData` project is a blockchain-based application that stores stock data fetched from the Yahoo Finance API onto the Ethereum blockchain. This project uses Solidity for the smart contract, and Node.js with Express for the server-side logic.

## Features

- **Fetch Stock Data**: Fetch stock data from Yahoo Finance API.
- **Store Data on Blockchain**: Store fetched stock data on the Ethereum blockchain.
- **Retrieve Stock Data**: Retrieve stored stock data from the blockchain.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/)

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/yourusername/StockData.git
cd StockData

### Step 2: Install Dependencies

Install the required dependencies:
-npm install

### Step 3: Start Ganache


Sure, here is the README file formatted so you can directly copy and paste it into your README.md file without any further edits:

markdown
Копировать код
# StockData: Blockchain-based Stock Information Storage

## Project Description

The `StockData` project is a blockchain-based application that stores stock data fetched from the Yahoo Finance API onto the Ethereum blockchain. This project uses Solidity for the smart contract, and Node.js with Express for the server-side logic.

## Features

- **Fetch Stock Data**: Fetch stock data from Yahoo Finance API.
- **Store Data on Blockchain**: Store fetched stock data on the Ethereum blockchain.
- **Retrieve Stock Data**: Retrieve stored stock data from the blockchain.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [MetaMask](https://metamask.io/)

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/yourusername/StockData.git
cd StockData
## Step 2: Install Dependencies
Install the required dependencies:

Start the Ganache CLI or GUI to run a local Ethereum blockchain:
--ganache-cli

## Step 4: Compile and Deploy Smart Contract
Compile and deploy the smart contract using Truffle:

--truffle compile
--truffle migrate

## Step 5: Configure MetaMask
Configure MetaMask to connect to your local Ethereum network (Ganache). Import the account from Ganache into MetaMask.

## Step 6: Start the Server
Start the Node.js server:

--node server.js

The server will start running at http://localhost:3000.

#API Usage

##Fetch and Store Stock Data

To fetch stock data from the Yahoo Finance API and store it on the blockchain, send a POST request to the /fetchStock endpoint with the following JSON body:
Endpoint: POST /fetchStock

{
  "symbol": "AAPL",
  "startDate": "2023-01-01",
  "endDate": "2023-12-31"
}

Response:
{
  "data": {
    "name": "AAPL",
    "currentPrice": "150.00",
    "historicalPrices": [
      {
        "date": "2023-01-01",
        "close": "145.00"
      },
      {
        "date": "2023-01-02",
        "close": "148.00"
      }
    ]
  },
  "blockchainResult": {
    // transaction details
  }
}

##Retrieve Stock Data
To retrieve stored stock data from the blockchain, you can interact directly with the smart contract using Web3.js or any other Ethereum client.


