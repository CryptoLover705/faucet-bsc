import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-etherscan';
// TODO: reenable solidity-coverage when it works
// import "solidity-coverage";

// const INFURA_API_KEY = process.env.INFURA_API_KEY || '';
const BSC_PRIVATE_KEY =
  process.env.BSC_PRIVATE_KEY! ||
  '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3'; // well known private key
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [{ version: '0.7.6', settings: {} }],
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    localhost: {},
    bsc: {
      url: `https://speedy-nodes-nyc.moralis.io/dd74f0e2844dca14fad48024/bsc/mainnet`,
      accounts: [BSC_PRIVATE_KEY],
    },
    coverage: {
      url: 'http://127.0.0.1:8555', // Coverage launches its own ganache-cli client
    },
  },
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ETHERSCAN_API_KEY,
  // },
};

export default config;
