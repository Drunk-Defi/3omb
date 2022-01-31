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
      WFTM: ['0x4c4a5d20f1ee40eaacb6a7787d20d16b7997363b', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      'wFTM': ['0x4c4a5d20f1ee40eaacb6a7787d20d16b7997363b', 18],
      'Pint': ['0x4ef059d5a8ca02e894b7db73429f659a934407a4', 18],
      '2OMB-2SHARES LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
      'Pint-WFTM LP': ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',18],
      'Keg-WFTM LP': ['0x6398ACBBAB2561553a9e458Ab67dCFbD58944e52',18],
      'Keg': ['0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca', 18],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'TOMB-FTM-LP': ['0x1CC86262AF235C5129540069b72A96EDe2F9A16a', 18],
      'TSHARE-FTM-LP': ['0xd352dac95a91afefb112dbbb3463ccfa5ec15b65', 18],
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
    name: 'Earn Pint by staking Keg',
    poolId: 0,
    sectionInUI: 0,
    contract: 'Tomb2ShareRewardPool',
    depositTokenName: 'Keg',
    earnTokenName: 'Pint',
    finished: false,
    multiplier: '7500x',
    site: "https://2omb.finance",
    buyLink: 'https://spookyswap.finance/swap?outputCurrency=0xaa5e966f9165ea9b24cb30392dcf9d64ed2aa342',
    sort: 0,
    closedForStaking: true,
  },
  Tomb2sharesWftmLPRewardPool: {
    name: 'Earn 3OMB by staking 2SHARES-WFTM LP',
    poolId: 1,
    sectionInUI: 0,
    contract: 'Tomb2SharesWftmLPRewardPool',
    depositTokenName: '2SHARES-WFTM LP',
    earnTokenName: '3OMB',
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
  Tomb2ombWftmLPRewardPool: {
    name: 'Earn Keg by staking Pint-WFTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'Tomb2ombWftmLPRewardPool',
    depositTokenName: 'Pint-WFTM LP',
    earnTokenName: 'Keg',
    finished: false,
    multiplier: '2x',
    site: "https://trusting-torvalds-2a9975.netlify.app/",
    buyLink: 'https://spookyswap.finance/add/FTM/0x4ef059d5a8ca02e894b7db73429f659a934407a4',
    sort: 13,
    closedForStaking: false,
  },
  
 
  
  TombMimRewardPool: {
    name: 'Earn 3OMB by staking MIM',
    poolId: 7,
    sectionInUI: 0,
    contract: 'TombMimGenesisRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: '3OMB',
    finished: false,
    multiplier: '500x',
    site: 'https://abracadabra.money/',
    buyLink: 'https://ftm.curve.fi/factory/7',
    sort: 8,
    closedForStaking: true,
  },
  TombBloomRewardPool: {
    name: 'Earn 3OMB by staking BLOOM',
    poolId: 8,
    sectionInUI: 0,
    contract: 'TombBloomGenesisRewardPool',
    depositTokenName: 'BLOOM',
    earnTokenName: '3OMB',
    finished: false,
    multiplier: '500x (0.04% Deposit Fee)',
    site: 'https://bloom.thetulipdao.com/',
    buyLink: 'https://swap.spiritswap.finance/#/exchange/swap/FTM/0x9B2e37cDC711CfcAC1E1482B5741c74dd3924199',
    sort: 9,
    closedForStaking: true,
  },
  TombFtmLPTombRewardPool: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPool',
    depositTokenName: 'TOMB-FTM-LP',
    earnTokenName: 'TOMB',
    finished: false,
    multiplier: '0',
    buyLink: '',
    site: '',
    sort: 7,
    closedForStaking: true,
  },
  TombFtmLPTombRewardPoolOld: {
    name: 'Earn TOMB by TOMB-FTM LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombFtmLpTombRewardPoolOld',
    depositTokenName: 'TOMB-FTM-LP',
    earnTokenName: 'TOMB',
    finished: true,
    multiplier: '0',
    buyLink: '',
    site: '',
    sort: 9,
    closedForStaking: true,
  },
  TombFtmLPTShareRewardPool: {
    name: 'Earn 3SHARES by 3OMB-WFTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombFtmLPTShareRewardPool',
    depositTokenName: '3OMB-WFTM LP',
    earnTokenName: '3SHARES',
    finished: false,
    multiplier: '35500x',
    buyLink: 'https://spookyswap.finance/add/FTM/0x14DEf7584A6c52f470Ca4F4b9671056b22f4FfDE',
    site: '/',
    sort: 8,
    closedForStaking: false,
  },
  TshareFtmLPTShareRewardPool: {
    name: 'Earn 3SHARES by 3SHARES-WFTM LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TshareFtmLPTShareRewardPool',
    depositTokenName: '3SHARES-WFTM LP',
    earnTokenName: '3SHARES',
    finished: false,
    multiplier: '24000x',
    buyLink: 'https://spookyswap.finance/add/FTM/0x6437ADAC543583C4b31Bf0323A0870430F5CC2e7',
    site: '/',
    sort: 9,
    closedForStaking: false,
  },
  TwoshareFtmLPTShareRewardPool: {
    name: 'Earn 3SHARES by 2SHARES-WFTM LP',
    poolId: 2,
    sectionInUI: 2,
    contract: 'TwoshareFtmLPTShareRewardPool',
    depositTokenName: '2SHARES-WFTM LP',
    earnTokenName: '3SHARES',
    finished: false,
    multiplier: '15000x',
    buyLink: 'https://spookyswap.finance/add/FTM/0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
    site: 'https://2omb.finance',
    sort: 10,
    closedForStaking: false,
  },
  TwoombFtmLPTShareRewardPool: {
    name: 'Earn 3SHARES by 2OMB-WFTM LP',
    poolId: 3,
    sectionInUI: 2,
    contract: 'TwoombFtmLPTShareRewardPool',
    depositTokenName: '2OMB-WFTM LP',
    earnTokenName: '3SHARES',
    finished: false,
    multiplier: '15000x',
    buyLink: 'https://spookyswap.finance/add/FTM/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
    site: 'https://2omb.finance',
    sort: 11,
    closedForStaking: false,
  },
};

export default configurations['production'];
