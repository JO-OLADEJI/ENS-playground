import { initializeConnector } from "@web3-react/core";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { MetaMask } from "@web3-react/metamask";

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
)

export const [coinbaseWallet, coinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: 'https://speedy-nodes-nyc.moralis.io/72e1c2ac3d68553b29a6b9ed/eth/mainnet',
        appName: 'ENS Playground'
      },
    })
)
