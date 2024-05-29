# KZ

# StockData: Блокчейнге Негізделген Акциялар Туралы Ақпаратты Сақтау

## Жобаның Сипаттамасы

"StockData" жобасы-Yahoo Finance API ИНТЕРФЕЙСІНЕН Алынған қор деректерін Ethereum блокчейніне сақтайтын блокчейнге негізделген қолданба. Бұл жоба smart contract Және Node Үшін Беріктікті пайдаланады.серверлік логикаға Арналған Экспрессі бар js.

## Мүмкіндіктер

- **Қор Деректерін алу**: yahoo Finance API-ден қор деректерін Алу.
- **Блокчейндегі деректерді сақтау**: Алынған қор деректерін Ethereum блокчейнінде Сақтаңыз.
- **Қор Деректерін алу**: сақталған қор деректерін блокчейннен Шығарып алыңыз.

## Алғышарттар

- [Node.js](https://nodejs.org б.
- [Трюфель](https://www.trufflesuite.com/truffle б.
- [Ганаш](https://www.trufflesuite.com/ganache б.
- [Метамаск](https://metamask.io б.

## Орнату Нұсқаулары

### 1-қадам: Репозиторийді Клондау

Репозиторийді жергілікті құрылғыға клондау:

`sh
git клоны https://github.com/yourusername/StockData.git
cd Сақтау Деректері
```
## 2-Қадам: Тәуелділіктерді Орнату
Қажетті тәуелділіктерді орнатыңыз:

Жергілікті Ethereum блокчейнін іске қосу ҮШІН GANACHE CLI немесе GUI іске қосыңыз:

`sh
--ganache-cli
```

## 4-қадам: Ақылды Келісімшартты Құрастырыңыз және Орналастырыңыз
Трюфельді пайдаланып ақылды келісімшартты құрастырыңыз және орналастырыңыз:

`sh
-- truffle create
-- truffle migrate
```

## 5-Қадам: MetaMask Орнату
MetaMask бағдарламасын Жергілікті Ethereum желісіне (Ganache) қосылу үшін конфигурациялаңыз. Есептік жазбаны Ganache-ден MetaMask-қа импорттаңыз.

## 6-қадам: Серверді Іске Қосыңыз
Түйінді іске қосыңыз.js сервері:

-- node сервері.js

Сервер жұмыс істей бастайды http://localhost:3000 б.

# API Пайдалану

##Қор Деректерін алу Және Сақтау

Yahoo Finance API-ДЕН қор деректерін алу және оны блокчейнде сақтау үшін КЕЛЕСІ JSON органымен /fetchStock соңғы нүктесіне POST сұрауын жіберіңіз:
Соңғы нүкте: POST / fetchStock
```json
{
  "symbol": "AAPL",
  "startDate": "2023-01-01",
  "endDate": "2023-12-31"
}
```

Жауап:
```json
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
```
## Қор Деректерін Алу
Блокчейннен сақталған қор деректерін алу үшін Web3 көмегімен смарт келісімшартпен тікелей әрекеттесуге болады.js немесе Кез келген Басқа Ethereum клиенті.

# EN
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
```
## Step 2: Install Dependencies
Install the required dependencies:

Start the Ganache CLI or GUI to run a local Ethereum blockchain:

```sh
--ganache-cli
```

## Step 4: Compile and Deploy Smart Contract
Compile and deploy the smart contract using Truffle:

```sh
--truffle compile
--truffle migrate
```

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
```json
{
  "symbol": "AAPL",
  "startDate": "2023-01-01",
  "endDate": "2023-12-31"
}
```

Response:
```json
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
```
##Retrieve Stock Data
To retrieve stored stock data from the blockchain, you can interact directly with the smart contract using Web3.js or any other Ethereum client.


