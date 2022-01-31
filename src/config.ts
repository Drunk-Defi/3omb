// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      'wFTM': ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      'PINT': ['0x7a6e4E3CC2ac9924605DCa4bA31d1831c84b44aE', 18],
      'TOMB': ['0x7a6e4E3CC2ac9924605DCa4bA31d1831c84b44aE', 18],
      'PINT-KEG LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
      'PINT-WFTM LP': ['0xbdC7DFb7B88183e87f003ca6B5a2F81202343478',18],
      'KEG-WFTM LP': ['0x6398ACBBAB2561553a9e458Ab67dCFbD58944e52',18],
      'KEG': ['0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca', 18],
      'TSHARE': ['0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca', 18],

      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'TBOND': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],

      'PINT-FTM-LP': ['0x83a52eff2e9d112e9b022399a9fd22a9db7d33ae', 18],
      'KEG-FTM-LP': ['0xd352dac95a91afefb112dbbb3463ccfa5ec15b65', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  Tomb2sharesRewardPool: {
    name: 'Earn PINT by staking KEG',
    poolId: 0,
    sectionInUI: 0,
    contract: 'Tomb2ShareRewardPool',
    depositTokenName: 'KEG',
    earnTokenName: 'PINT',
    finished: false,
    multiplier: '7500x',
    site: "https://2omb.finance",
    buyLink: 'https://spookyswap.finance/swap?outputCurrency=0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
    sort: 0,
    closedForStaking: true,
  },
  Tomb2sharesWftmLPRewardPool: {
    name: 'Earn PINT by staking KEG-WFTM LP',
    poolId: 1,
    sectionInUI: 0,
    contract: 'Tomb2SharesWftmLPRewardPool',
    depositTokenName: 'KEG-WFTM LP',
    earnTokenName: 'PINT',
    finished: false,
    multiplier: '6000x',
    site: "https://2omb.finance",
    buyLink: 'https://spookyswap.finance/add/FTM/0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
    sort: 1,
    closedForStaking: true,
  },
  // Tomb2shares2ombLPRewardPool: {
  //   name: 'Earn 3OMB by staking 2OMB-2SHARES LP',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'Tomb2Shares2ombLPRewardPool',
  //   depositTokenName: '2OMB-2SHARES LP',
  //   earnTokenName: '3OMB',
  //   finished: false,
  //   multiplier: '6000',
  //   site: "https://2omb.finance",
  //   buyLink: 'https://spookyswap.finance/add/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae/0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
  //   sort: 2,
  //   closedForStaking: false,
  // },
  
};

export default configurations['production'];
