import React from "react";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";

// components
import { ButtonPrimary, ButtonConnected } from "../Button";

// connectors
import { metaMask, coinbaseWallet } from "connectors";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";

// utils
import { shortenAddress } from "utils";
import { isCoinbase } from "utils/connector";

// assets
import CoinbaseWalletIcon from "assets/coinbaseWalletIcon.svg";
import Identicon from "assets/blockies.png";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Icon = styled.img<{ size: number }>`
  height: ${({ size }) => size.toString() + "px"};
  width: ${({ size }) => size.toString() + "px"};
  border-radius: 50%;
  margin-left: 0.5rem;
`;

const ConnectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConnectorIcon = () => {
  const { connector } = useWeb3React();
  if (connector instanceof CoinbaseWallet) {
    return <Icon src={CoinbaseWalletIcon} alt="coinbase icon" size={20} />;
  }
  return <Icon src={Identicon} alt="metamask icon" size={20} />;
};

const Nav = () => {
  const { account } = useWeb3React();

  const handleConnectWallet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (window.ethereum) {
      if (isCoinbase()) {
        void coinbaseWallet.activate();
      } else {
        void metaMask.activate();
      }
    } else {
      alert("Please install a Wallet");
    }
  };

  return (
    <NavWrapper>
      {account ? (
        <ButtonConnected>
          <ConnectedWrapper>
            {shortenAddress(account)}
            <ConnectorIcon />
          </ConnectedWrapper>
        </ButtonConnected>
      ) : (
        <ButtonPrimary onClick={handleConnectWallet}>
          Connect Wallet
        </ButtonPrimary>
      )}
    </NavWrapper>
  );
};

export default Nav;
