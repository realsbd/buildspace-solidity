require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/5GGCyxEYs7Gd6DTXgyQmTrxx-ACt0dhs',
      accounts: ['849453122785c23946f36692074b582ec774effc3ded14b4bdca6b1db0a3d4cd'],
    },
  },
};