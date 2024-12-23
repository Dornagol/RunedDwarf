# RunedDwarf Token (RDW)
A simple ERC-20 token with pause and mint functionality built on Ethereum.
Overview
RunedDwarf (RDW) is an ERC-20 token with:

## Initial supply: 1,000,000 RDW
- Pausable transfers for security
- Minting capabilities
- Permit functionality for gasless approvals

## Smart Contract
The token is deployed on Sepolia testnet: [Contract Address]
Main Features

- pause(): Freeze all token transfers (owner only)
- unpause(): Resume token transfers (owner only)
- mint(address to, uint256 amount): Create new tokens (owner only)

## Standard Functions

- Transfer tokens between addresses
- Check token balances
- Approve and transferFrom operations

## Built With

- Solidity
- OpenZeppelin Contracts
- Hardhat

## License
MIT License
