import { Web3Auth } from "@web3auth/modal";

//Initialize within your constructor
export const web3auth = new Web3Auth({
  clientId: "YOUR_WEB3AUTH_CLIENT_ID", // Get your Client ID from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x1", // Please use 0x5 for Goerli Testnet
  },
});