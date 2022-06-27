import React, { useEffect } from "react";
import { Web3ReactProvider, Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";

// connectors
import {
  coinbaseWallet,
  metaMask,
  metaMaskHooks,
  coinbaseWalletHooks,
} from "connectors";
import { useState } from "react";

// utils
import { isCoinbase } from "utils/connector";

const connectors: [MetaMask | CoinbaseWallet, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [coinbaseWallet, coinbaseWalletHooks],
];

interface Web3ProviderProps {
  children: React.ReactNode;
}

const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [triedCoinbase, setTriedCoinbase] = useState<boolean>(false);
  const [tried, setTried] = useState<boolean>(false);

  // eagerly connect to coinbase first
  useEffect(() => {
    if (isCoinbase()) {
      void coinbaseWallet.connectEagerly().catch(() => {
        setTriedCoinbase(true);
        console.debug("Failed to connect eagerly to coinbase wallet");
      });
    } else {
      setTriedCoinbase(true);
    }
  }, []);

  // then try metamask if coinbase fails
  useEffect(() => {
    if (triedCoinbase && !tried && !isCoinbase()) {
      void metaMask.connectEagerly().catch(() => {
        setTried(true);
        console.debug("Failed to connect eagerly to metamask");
      });
    }
  }, [triedCoinbase, tried]);

  return (
    <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
  );
};

export default Web3Provider;
