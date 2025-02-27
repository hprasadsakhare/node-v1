import Web3 from 'web3';

const test = async () => {
    const web3 = new Web3('http://localhost:8545'); // Change to your actual RPC endpoint
    const acc = web3.eth.accounts.create();
    
    console.log('Address:', acc.address);
    console.log('Private key:', acc.privateKey);

    console.log('web.eth.getBalance', await web3.eth.getBalance(acc.address));
    
    const accounts = await web3.eth.getAccounts();
    console.log('Accounts:', accounts);

    if (accounts.length === 0) {
        console.error('No accounts found. Make sure your Ethereum client is running.');
        return;
    }

    const coinbase = accounts[0]; // Use the first account instead of eth_coinbase
    console.log('Coinbase:', coinbase);
    console.log('Coinbase balance:', await web3.eth.getBalance(coinbase));

    await web3.eth.sendTransaction({
        from: coinbase,
        to: acc.address,
        value: BigInt(100_000000_000000_000000) // 100 ETH (adjust as needed)
    });

    console.log('Balance after:', await web3.eth.getBalance(acc.address));
};

test();
