import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

// components
import Nav from "components/Nav";

// assets
import depiction from "assets/ethereum-girl.png";

// utils
import { shortenAddress } from "utils";

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 50%;
  text-align: center;
`;

const RightWrapper = styled.div`
  width: 50%;
  text-align: center;
`;

const Illustration = styled.img`
  width: 28rem;
`;

const ENS = styled.h1`
  color: #1b73e9;
  text-decoration: underline;
`;

const Home = () => {
  const { ENSName, account } = useWeb3React();
  return (
    <>
      <Nav />
      <FlexContainer>
        <LeftWrapper>
          <h1>Welcome to ENS Playground!</h1>
          <ENS>{ENSName ?? (account ? shortenAddress(account) : "")}</ENS>
        </LeftWrapper>
        <RightWrapper>
          <Illustration src={depiction} alt="lady holding ethereum ballon" />
        </RightWrapper>
      </FlexContainer>
    </>
  );
};

export default Home;
