// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import * as CryptoJS from 'crypto-js';

// http://ec2-3-136-17-110.us-east-2.compute.amazonaws.com:9090/cybernetix/v1/caseMgmt/entity/newIncident

export const pyServerURL = 'https://demo7.cetascyber.com/py-mba/'
// export const pyServerURL = 'http://localhost:9600/py-mba/'

export const environment = {
    production: false,
    theme: 'black',
    blackThemeBrandColor: '#0AADC8',
    blackThemePieChartTrackColor: '#252c32',

    blueThemeBrandColor: '#252c32',
    blueThemePieChartTrackColor: '#eeeeee',
 
    serverUrl: 'https://demo7.cetascyber.com/cybernetix',
    serverDomainUrl: 'https://demo7.cetascyber.com/',
    // serverUrl: 'http://localhost:9090/cybernetix',
    newServerUrl:'https://demo7.cetascyber.com/node/cybernetix/v1',

    serverUrls: {
        'mba': pyServerURL,
        'vm': pyServerURL + 'core/vm/configs/',
        'adq': pyServerURL + 'adq/',
        'iac': pyServerURL + 'cloud/'
    },

    encryptionParsePhrase: '6726376763767452',
    // kibanaLink: 'http://ec2-3-23-11-154.us-east-2.compute.amazonaws.com:5601',
    kibanaLink: 'https://demo7.cetascyber.com/kibana',
    // kibanaLink: 'http://169.63.187.196:5601',
    liveThreatHunterIndex: '0513ea30-c59d-11ea-9cda-a1ff816422bf',
    API_KEY: CryptoJS.enc.Utf8.parse('123456$#@$^@ANIL'),
    API_CIPHER:  {
        // keySize: 128 / 8,
        iv: CryptoJS.enc.Utf8.parse('123456$#@$^@ANIL'),  // Initialization Vector
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
}

