import { Web3Auth } from "@web3auth/modal";

export const web3auth = new Web3Auth({
    clientId: "YOUR_WEB3AUTH_CLIENT_ID", // get it from Web3Auth Dashboard
    web3AuthNetwork: "cyan",
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x13881", // hex of 80001, polygon testnet
      rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
      // Avoid using public rpcTarget in production.
      // Use services like Infura, Quicknode etc
      displayName: "Polygon Mumbai Testnet",
      blockExplorer: "https://mumbai.polygonscan.com/",
      ticker: "MATIC",
      tickerName: "Matic",
    },
});