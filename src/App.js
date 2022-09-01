/*
  * We are going to be using the useEffect hook!
  */
 importReact, { useEffect } from'react';
 importtwitterLogo from'./assets/twitter-logo.svg';
 import'./App.css';
// Change this up to be your Twitter if you want.
 constTWITTER_HANDLE= '_buildspace';
 constTWITTER_LINK= `https://twitter.com/${TWITTER_HANDLE}`;
constApp= () => {
  /*
   * This function holds the logic for deciding if a Phantom Wallet is
   * connected or not
   */
 constcheckIfWalletIsConnected= async() => {
    try{
      const{ solana } = window;
if(solana) {
        if(solana.isPhantom) {
          console.log('Phantom wallet found!');
        }
      } else{
        alert('Solana object not found! Get a Phantom Wallet :ghost:');
      }
    } catch(error) {
      console.error(error);
    }
  };
/*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
 
 useEffect(() =>{
    constonLoad= async() => {
      awaitcheckIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return() =>window.removeEventListener('load', onLoad);
  }, []);
return(
    <divclassName="App"><divclassName="container"><divclassName="header-container"><pclassName="header">🖼 GIF Portal</p><pclassName="sub-text">View your GIF collection in the metaverse :sparkles:
          </p></div><divclassName="footer-container"><imgalt="Twitter Logo"className="twitter-logo"src={twitterLogo}/><aclassName="footer-text"href={TWITTER_LINK}target="_blank"rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a></div></div></div>);
 };
exportdefaultApp;
