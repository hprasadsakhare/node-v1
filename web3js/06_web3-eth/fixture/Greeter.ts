/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
export const GreeterAbi = [
    {
        inputs: [{ internalType: 'string', name: '_greeting', type: 'string' }],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, internalType: 'string', name: 'greeting', type: 'string' }],
        name: 'GREETING_CHANGED',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'string', name: 'from', type: 'string' },
            { indexed: false, internalType: 'string', name: 'to', type: 'string' },
        ],
        name: 'GREETING_CHANGING',
        type: 'event',
    },
    {
        inputs: [],
        name: 'greet',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    
    { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [{ internalType: 'string', name: '_greeting', type: 'string' }],
        name: 'setGreeting',
        outputs: [
            { internalType: 'bool', name: '', type: 'bool' },
            { internalType: 'string', name: '', type: 'string' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },

] as const;
export const GreeterBytecode =
    '0x60806040523480156200001157600080fd5b5060405162000ed038038062000ed08339818101604052810190620000379190620001ea565b806001908162000048919062000486565b5060008081905550506200056d565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000c08262000075565b810181811067ffffffffffffffff82111715620000e257620000e162000086565b5b80604052505050565b6000620000f762000057565b9050620001058282620000b5565b919050565b600067ffffffffffffffff82111562000128576200012762000086565b5b620001338262000075565b9050602081019050919050565b60005b838110156200016057808201518184015260208101905062000143565b60008484015250505050565b6000620001836200017d846200010a565b620000eb565b905082815260208101848484011115620001a257620001a162000070565b5b620001af84828562000140565b509392505050565b600082601f830112620001cf57620001ce6200006b565b5b8151620001e18482602086016200016c565b91505092915050565b60006020828403121562000203576200020262000061565b5b600082015167ffffffffffffffff81111562000224576200022362000066565b5b6200023284828501620001b7565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028e57607f821691505b602082108103620002a457620002a362000246565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200030e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002cf565b6200031a8683620002cf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000367620003616200035b8462000332565b6200033c565b62000332565b9050919050565b6000819050919050565b620003838362000346565b6200039b62000392826200036e565b848454620002dc565b825550505050565b600090565b620003b2620003a3565b620003bf81848462000378565b505050565b5b81811015620003e757620003db600082620003a8565b600181019050620003c5565b5050565b601f82111562000436576200040081620002aa565b6200040b84620002bf565b810160208510156200041b578190505b620004336200042a85620002bf565b830182620003c4565b50505b505050565b600082821c905092915050565b60006200045b600019846008026200043b565b1980831691505092915050565b600062000476838362000448565b9150826002028217905092915050565b62000491826200023b565b67ffffffffffffffff811115620004ad57620004ac62000086565b5b620004b9825462000275565b620004c6828285620003eb565b600060209050601f831160018114620004fe5760008415620004e9578287015190505b620004f5858262000468565b86555062000565565b601f1984166200050e86620002aa565b60005b82811015620005385784890151825560018201915060208501945060208101905062000511565b8683101562000558578489015162000554601f89168262000448565b8355505b6001600288020188555050505b505050505050565b610953806200057d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a413686214610046578063cfae321714610077578063d09de08a14610095575b600080fd5b610060600480360381019061005b91906103c0565b61009f565b60405161006e9291906104a3565b60405180910390f35b61007f6101bd565b60405161008c91906104d3565b60405180910390f35b61009d61024f565b005b600060607f0d363f2fba46ab11b6db8da0125b0d5484787c44e265b48810735998bab12b756001846040516100d59291906105ee565b60405180910390a182600190816100ec91906107c6565b507f7d7846723bda52976e0286c6efffee937ee9f76817a867ec70531ad29fb1fc0e600160405161011d9190610898565b60405180910390a160018080805461013490610524565b80601f016020809104026020016040519081016040528092919081815260200182805461016090610524565b80156101ad5780601f10610182576101008083540402835291602001916101ad565b820191906000526020600020905b81548152906001019060200180831161019057829003601f168201915b5050505050905091509150915091565b6060600180546101cc90610524565b80601f01602080910402602001604051908101604052809291908181526020018280546101f890610524565b80156102455780601f1061021a57610100808354040283529160200191610245565b820191906000526020600020905b81548152906001019060200180831161022857829003601f168201915b5050505050905090565b600160005461025e91906108e9565b600081905550565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102cd82610284565b810181811067ffffffffffffffff821117156102ec576102eb610295565b5b80604052505050565b60006102ff610266565b905061030b82826102c4565b919050565b600067ffffffffffffffff82111561032b5761032a610295565b5b61033482610284565b9050602081019050919050565b82818337600083830152505050565b600061036361035e84610310565b6102f5565b90508281526020810184848401111561037f5761037e61027f565b5b61038a848285610341565b509392505050565b600082601f8301126103a7576103a661027a565b5b81356103b7848260208601610350565b91505092915050565b6000602082840312156103d6576103d5610270565b5b600082013567ffffffffffffffff8111156103f4576103f3610275565b5b61040084828501610392565b91505092915050565b60008115159050919050565b61041e81610409565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561045e578082015181840152602081019050610443565b60008484015250505050565b600061047582610424565b61047f818561042f565b935061048f818560208601610440565b61049881610284565b840191505092915050565b60006040820190506104b86000830185610415565b81810360208301526104ca818461046a565b90509392505050565b600060208201905081810360008301526104ed818461046a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061053c57607f821691505b60208210810361054f5761054e6104f5565b5b50919050565b60008190508160005260206000209050919050565b6000815461057781610524565b610581818661042f565b9450600182166000811461059c57600181146105b2576105e5565b60ff1983168652811515602002860193506105e5565b6105bb85610555565b60005b838110156105dd578154818901526001820191506020810190506105be565b808801955050505b50505092915050565b60006040820190508181036000830152610608818561056a565b9050818103602083015261061c818461046a565b90509392505050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106727fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610635565b61067c8683610635565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006106c36106be6106b984610694565b61069e565b610694565b9050919050565b6000819050919050565b6106dd836106a8565b6106f16106e9826106ca565b848454610642565b825550505050565b600090565b6107066106f9565b6107118184846106d4565b505050565b5b818110156107355761072a6000826106fe565b600181019050610717565b5050565b601f82111561077a5761074b81610555565b61075484610625565b81016020851015610763578190505b61077761076f85610625565b830182610716565b50505b505050565b600082821c905092915050565b600061079d6000198460080261077f565b1980831691505092915050565b60006107b6838361078c565b9150826002028217905092915050565b6107cf82610424565b67ffffffffffffffff8111156107e8576107e7610295565b5b6107f28254610524565b6107fd828285610739565b600060209050601f831160018114610830576000841561081e578287015190505b61082885826107aa565b865550610890565b601f19841661083e86610555565b60005b8281101561086657848901518255600182019150602085019450602081019050610841565b86831015610883578489015161087f601f89168261078c565b8355505b6001600288020188555050505b505050505050565b600060208201905081810360008301526108b2818461056a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108f482610694565b91506108ff83610694565b9250828201905080821115610917576109166108ba565b5b9291505056fea26469706673582212207e5ba44159ffb37af8e8a9e7c5b6fb5ce81ea195b62ae3ac36288f2cf72c18a764736f6c63430008100033';