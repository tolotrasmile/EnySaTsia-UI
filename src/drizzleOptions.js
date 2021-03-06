import EnySaTsia from './Contracts/EnySaTsiaVoting.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8541'
    }
  },
  contracts: [ EnySaTsia ],
  events: {},
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions
