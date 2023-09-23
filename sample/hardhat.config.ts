import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';

const {
  PRIVATE_KEY
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    scrollAlpha: {
      url: 'https://sepolia-rpc.scroll.io/' || '',
      accounts:
        PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      scrollAlpha: 'abc',
    },
    customChains: [
      {
        network: 'scrollAlpha',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia-blockscout.scroll.io/api',
          browserURL: 'https://sepolia-blockscout.scroll.io/',
        },
      },
    ],
  },
};

export default config;
