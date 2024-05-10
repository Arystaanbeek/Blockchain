const axios = require('axios');

const apiKey = 'Z5PRD4266B2CCZJL';
const symbol = 'AAPL'; // Пример символа акции (в данном случае, это Apple)

axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`)
  .then(response => {
    // Обработка полученных данных
    const stockData = response.data;
    console.log(stockData);
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });
