import './Navbar.css'
import { useEffect } from 'react';
import { web3auth } from '../../ConnectWallet/ConnectWallet';
import { ethers } from 'ethers';

function Navbar({ walletConnected, setWalletConnected, setProvider }) {

  // Connecting wallet 
  const handleConnect = async () => {
    try {
       console.log('Initializing web3 auth...');
       await web3auth.initModal();
       console.log("Connecting wallet..."); 
       const web3authProvider = web3auth.connect();
       await web3auth.connect(); 
       console.log("Wallet connected!")
       const provider = new ethers.providers.Web3Provider(web3authProvider);
       setProvider(provider); 
       setWalletConnected(true); 
    } catch (error){
        console.error(error)
    }
  }   

  // Disconnect connected wallet 
  const handleDisconnect = () => {
    try {
      setWalletConnected(false); 
      // setAccount(""); 
      console.log("Account disconnected!"); 
    } catch (error){
      console.error(error)
    }
  }

  useEffect(() => {
    // Console log the account connected
    // console.log("Account is: ", account); 
  })


  return (
      <div className="navbar">
        <div className="logo">
          <p>DappStarterKit</p>
        </div>

        {
          !walletConnected && (
            <button className="connect-button" onClick={handleConnect} >Connect Wallet</button>
          )
        }

        {
          walletConnected && (
            <div>
              {/* {
                account && (
                  <button className='connect-button'>
                    { account.slice(0,6) + "..." + account.slice(38,42) }
                  </button>
                )
              } */}
              <button className='connect-button' onClick={handleDisconnect}>Disconnect Wallet</button>
            </div>
          )
        }
        
      </div>
  );
}

export default Navbar;