const messages = {
  en: {
    app: {
      main: {
        connectButton: 'Connect to Ethereum',
        changeButton: 'Change Wallet',
      },
      modal: {
        backLink: 'Select other',
        closeText: 'Close dialogue',
      },
      networkStatus: {
        connectedWithInfo: 'Connected using {signer} to Ethereum {network} Network',
        noRequiredInfo: `There is no specific Ethereum Network requirement set. 
        'If you know what you do that is ok. On a live site you should contract the sites Administrator.`,
        networkMismatchInfo: 'Ethereum Network does not match. Please switch your Ethereum Network to {networkLabel} '
        + 'Network (Network ID {networkId}).'
      },
      accountStatus: {
        accountOkInfo: 'Account is unlocked.',
        accountLockedInfo: 'Account is locked. Please unlock your account by entering your password '
        + 'or approve this application using your Wallet.',
      }
    },
    globals: {
      networks: {
        '1': {
          label: 'Ethereum Main',
        },
        '3': {
          label: 'Ropsten',
        },
        '4': {
          label: 'Rinkeby',
        },
        '8': {
          label: 'Ubiq',
        },
        '42': {
          label: 'Kovan',
        },
        '77': {
          label: 'Sokol',
        },
        '99': {
          label: 'Public POA Network Main',
        },
      },
      signers: {
        metamask: {
          label: 'Metamask',
          buttonText: 'Connect to MetaMask',
          description: {
            pre: 'Connect to the ',
            link: 'MetaMask browser wallet',
            post: '.',
            url: 'https://metamask.io',
          },
          buttonColor: 'rgb(246, 133, 27)',
        },
        walletConnect: {
          label: 'WalletConnect',
          buttonText: 'Use WalletConnect',
          description: {
            pre: 'Scan a QR code to link your mobile wallet',
            link: 'using WalletConnect',
            post: '.',
            url: 'https://walletconnect.org',
          },
          buttonColor: 'rgb(64, 153, 255)',
        },
      },
    }
  },
  ja: {
    app: {
      main: {
        connectButton: 'エテリアム 接続する'
      }
    },
  }

}

export default messages
