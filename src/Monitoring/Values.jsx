export const SOCKET_CONNECT_STATES = {
    0: 'CONNECTING',
    1: 'OPEN OR READY',
    2: 'CLOSING',
    3: 'CLOSED OR UNABLE TO OPEN',
}

// https://gist.github.com/unitycoder/a82365a93c9992f7f9631741fe007e9d

// LINK_TYPE (-)

// PAYLOAD:
//          SHOST       (SOURCE ADDR)           HEX
//          DHOST       (DESTINATION ADDR)      HEX
//          ETHER TYPE  (TRANSFER PROTOCOL)     DEC
//          VLAN        (-)
//          PAYLOAD:
//                  -----------------------------------
//                  CHECKSUM
//                  LENGTH                      DECIMAL
//                  SPORT   (SOURCE PORT)       DECIMAL
//                  DPORT   (DESTINATION PORT)  DECIMAL
//                  DATA    (ACTUAL DATA)       HEX
//                  -----------------------------------
// TTL     (TIME TO LIVE)                       DECIMAL
// SADDR   (SOURCE IP)                          DECIMAL
// DADDR   (DESTINATION IP)                     DECIMAL
// PROTOCOL(COMM PROTOCOL NUMBER)               DECIMAL
// LENGTH  (PAYLOAD LENGTH)                     DECIMAL
// VERSION (-)

// PCAP HEADER:
//     CAP LENGTH  (PACKET SIZE) //one of this is the original size
//     LEN         (PACKET SIZE) //and the other one is the actual
//     TV SEC      (RECIEVE TIME)               EPOCH TIME
//     TC USEC     (-)

//##### EXAMPLE ######
// {
//     "link_type": "LINKTYPE_ETHERNET",
//     "pcap_header": {
//        "tv_sec": 1692462500,
//        "tv_usec": 302174,
//        "caplen": 119,
//        "len": 119
//     },
//     "payload": {
//        "dhost": {
//           "addr": [121, 432, 294, 120, 0, 265]
//        },
//        "shost": {
//           "addr": [543, 132, 653, 321, 543, 430]
//        },
//        "ethertype": 2048,
//        "vlan": null,
//        "payload": {
//           "version": 4,
//           "headerLength": 20,
//           "diffserv": 0,
//           "length": 105,
//           "identification": 9419,
//           "flags": {
//              "reserved": false,
//              "doNotFragment": true,
//              "moreFragments": false
//           },
//           "fragmentOffset": 0,
//           "ttl": 255,
//           "protocol": 17,
//           "headerChecksum": 46249,
//           "saddr": {
//              "addr": [192, 168, 0, 107]
//           },
//           "daddr": {
//              "addr": [224, 0, 0, 251]
//           },
//           "payload": {
//              "sport": 5353,
//              "dport": 5353,
//              "length": 85,
//              "checksum": 49264,
//              "data": {
//                 "type": "Buffer",
//                 "data": [49, 65, 68, 56, 52, 53, 4, 95, 
//                    115, 117, 98, 11, 95, 103, 111, 111, 
//                    103, 108, 101, 99, 97, 115, 116, 4]
//              }
//           }
//        }
//     }
//  }

export const ETHER_TYPE = {
    1: {
        'DEC': 2048,
        'HEX': '800',
        'DESCRIPTION': "IPv4"
    },
    2: {
        'DEC': 33100,
        'HEX': '814C',
        'DESCRIPTION': 'SNMP',
    },
    3: {
        'DEC': 34667,
        'HEX': '876B',
        'DESCRIPTION': 'TCP/IP COMPRESSION',
    },
    4: {
        'DEC': -1,
        'HEX': '8808',
        'DESCRIPTION': 'EPON',
    },
    5: {
        'DEC': -1,
        'HEX': '880B',
        'DESCRIPTION': 'PPP',
    },
    6: {
        'DEC': 34915,
        'HEX': '8863',
        'DESCRIPTION': 'PPPoE DISCOVERY',
    },
    7: {
        'DEC': 34916,
        'HEX': '8864',
        'DESCRIPTION': 'PPoE SESSION STAGE',
    },
    8: {
        'DEC': 36864,
        'HEX': '9000',
        'DESCRIPTION': 'LOOPBACK',
    },
    9: {
        'DEC': 65535,
        'HEX': 'FFFFF',
        'DESCRIPTION': 'RESERVED',
    }
}

export const PROTOCOL = {
    
}