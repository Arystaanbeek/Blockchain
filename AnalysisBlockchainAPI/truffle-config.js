module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Локальный адрес
      port: 8545,            // Порт, который указан в Ganache
      network_id: "*",       // Подключение к любому network_id
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"     // Укажите версию Solidity
    }
  }
};
