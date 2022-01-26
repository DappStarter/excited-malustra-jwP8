require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth remain collect install option broken sell'; 
let testAccounts = [
"0x5aecd2d9ccdf198e739c44c7f7cc9c8924e69bfd2119345db6f3900abfe84d60",
"0x1dd1cfe6b72a214079b09f7b5b6e0659b9bca52d2f70aa25503bb51b9d7b2a36",
"0x45b7b91621f403de18db082235f29038bb6415931f8016af7b7e33d4c0b6c50a",
"0x7e86ecf4f4cbae62d1e42c454785143e9d171dce98c3403e0d6badcff766e1c9",
"0xc59215b9e2f33be687c33c42a12e61f1e951839c3db22622fd28b560b1e3dc60",
"0xaf3cd331c6f10b79f32a32c8638c1aad0ef29d36021f83db55a2bea89831091e",
"0x83a7283beeb2d2b87d2dce881d44f119aade841cfafe41e366096563f992dd1a",
"0xfb96376da9b54379d8fc452e6eb9d1dc1a6bec18d4f0fc117cfde1423d161f35",
"0x5580ca4e489f1d3055efb14ea6bd89573b89338e66c84565ccde8e32c408f644",
"0xb3892760a81d376d0c6214c6eef1f9a91b8a0913d03848450500c4d2ebd1b7e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

