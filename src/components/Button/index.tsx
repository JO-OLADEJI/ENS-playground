import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: .7rem 1.3rem;
  border-radius: .4rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #1B73E9;
  color: #ffffff;
`;

export const ButtonConnected = styled(Button)`
  background-color: #ffffff;
  color: #1B73E9;
  border: 1px solid #1B73E9;
`;
