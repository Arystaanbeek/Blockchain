const {Web3} = require('web3');

// Assuming the WebSocket endpoint is correctly configured on your Ethereum node:
const websocketUrl = 'ws://localhost:8545';
const provider = new Web3.providers.WebsocketProvider(websocketUrl);

const web3 = new Web3(provider);

web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (error) {
        console.error('Error subscribing to new block headers:', error);
        return;
    }
    console.log('New Block Header:', blockHeader);
})
// .on('connected', function(subscriptionId){
//     console.log('Connected with subscription ID:', subscriptionId);
// })
// .on('error', console.error);