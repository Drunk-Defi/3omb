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
      'WFTM': ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      'Pint': ['0x4ef059d5a8ca02e894b7db73429f659a934407a4', 18],
      'Pint-WFTM LP': ['0x5536edacc0286ce0145405c0a2cfd33a7520cd8a',18],
      'KEG-WFTM LP': ['0xAEFf73b1E7d7Ee38D18eE295C44C0624f321fB9F',18],
      'KEG': ['0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca', 18],
      'TOMB-FTM-LP': ['0x5536edacc0286ce0145405c0a2cfd33a7520cd8a', 18],
      'TSHARE-FTM-LP': ['0xAEFf73b1E7d7Ee38D18eE295C44C0624f321fB9F', 18],
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
  TombFtmLPTShareRewardPool: {
    name: 'Earn Keg by staking Pint-WFTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombFtmLPTShareRewardPool',
    depositTokenName: 'Pint-WFTM LP',
    earnTokenName: 'KEG',
    finished: false,
    multiplier: '150x',
    site: "https://trusting-torvalds-2a9975.netlify.app/",
    buyLink: 'https://spookyswap.finance/add/FTM/0x4ef059d5a8ca02e894b7db73429f659a934407a4',
    sort: 1,
    closedForStaking: false,
  },
};

export default configurations['production'];
