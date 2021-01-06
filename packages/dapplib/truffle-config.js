require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember mistake idea kite bone gauge'; 
let testAccounts = [
"0x910a1a9f708fd237b284996db509b0df7e3ae7c92801d4127dc666803cf40c39",
"0xc03616a31f17fdd9e00f828154d790954d03d4f4d1bbf019d265de72346b7c54",
"0xeb4c73cbbb398a8edbb9bb4314ff921ec9898fd4fd83d7780460677c89fd495e",
"0x2400b8d7ae639d2dd40e320e38e466ef152466cb6870f89875989368d18e6820",
"0x3fdd6a41b9d05f0d7e377644453d6df1bd11671c829eaf5ffdae0dcf85fdd6b3",
"0x73fa1d91abf1cca93ad8cd09ff6fd26e90136322c2f23a5ca892c0775f61b088",
"0xef2073bcb98068325c5a6e40514fc713a7db2c1e99e2f787a4dd5c1cf9243c1d",
"0x6ab99c3608f4e2a7a730d74919541049270581eb34fb5e971438abc7c3d51679",
"0x1a3e0be661f3b0e38200d35778ae20447c692c285a1e9244771bf15473edeaa9",
"0xe1147248b4827d21d4cee15e4ba2b93c73ca8e42f1b4909caf55f50e12362c3f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
