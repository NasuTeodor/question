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

export const ETHER_TYPE_CST = {
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

export const ETHER_TYPE_HEX = {
    '0800': 'Internet Protocol version 4(IPv4)',
    '0806': 'Address Resolution Protocol(ARP)',
    '0842': 'Wake - on - LAN',
    '22F0': 'Audio Video Transport Protocol(AVTP)',
    '22F3': 'IETF TRILL Protocol',
    '22EA': 'Stream Reservation Protocol',
    '6002': 'DEC MOP RC',
    '6003': 'DECnet Phase IV, DNA Routing',
    '6004': 'DEC LAT',
    '8035': 'Reverse Address Resolution Protocol(RARP)',
    '809B': 'AppleTalk(Ethertalk)',
    '80F3': 'AppleTalk Address Resolution Protocol(AARP)',
    '8100': 'VLAN - tagged frame(IEEE 802.1Q) and Shortest Path Bridging IEEE 802.1aq with NNI compatibility[9]',
    '8102': 'Simple Loop Prevention Protocol(SLPP)',
    '8103': 'Virtual Link Aggregation Control Protocol(VLACP)',
    '8137': 'IPX',
    '8204': 'QNX Qnet',
    '86DD': 'Internet Protocol Version 6(IPv6)',
    '8808': 'Ethernet flow control',
    '8809': 'Ethernet Slow Protocols[10] such as the Link Aggregation Control Protocol(LACP)',
    '8819': 'CobraNet',
    '8847': 'MPLS unicast',
    '8848': 'MPLS multicast',
    '8863': 'PPPoE Discovery Stage',
    '8864': 'PPPoE Session Stage',
    '887B': 'HomePlug 1.0 MME',
    '888E': 'EAP over LAN(IEEE 802.1X)',
    '8892': 'PROFINET Protocol',
    '889A': 'HyperSCSI(SCSI over Ethernet)',
    '88A2': 'ATA over Ethernet',
    '88A4': 'EtherCAT Protocol',
    '88A8': 'Service VLAN tag identifier(S- Tag) on Q-in -Q tunnel.',
    '88AB': 'Ethernet Powerlink[citation needed]',
    '88B8': 'GOOSE(Generic Object Oriented Substation event)',
    '88B9': 'GSE(Generic Substation Events) Management Services',
    '88BA': 'SV(Sampled Value Transmission)',
    '88BF': 'RoMON(unofficial)',
    '88CC': 'Layer Discovery Protocol(LLDP)',
    '88CD': 'SERCOS III',
    '88E1': 'HomePlug Green PHY',
    '88E3': 'Media Redundancy Protocol(IEC62439 - 2)',
    '88E5': 'IEEE 802.1AE MAC security(MACsec)',
    '88E7': 'Provider Backbone Bridges(PBB)(IEEE 802.1ah)',
    '88F7': 'Precision Time Protocol(PTP) over IEEE 802.3 Ethernet',
    '88F8': 'NC - SI',
    '88FB': 'Parallel Redundancy Protocol(PRP)',
    '8902': 'IEEE 802.1ag Connectivity Fault Management(CFM) Protocol / ITU - T Recommendation Y.1731(OAM)',
    '8906': 'Fibre Channel over Ethernet(FCoE)',
    '8914': 'FCoE Initialization Protocol',
    '8915': 'RDMA over Converged Ethernet(RoCE)',
    '891D': 'TTEthernet Protocol Control Frame(TTE)',
    '893a': '1905.1 IEEE Protocol',
    '892F': 'High - availability Seamless Redundancy(HSR)',
    '9000': 'Ethernet Configuration Testing Protocol[11]',
    'F1C1': 'Redundancy Tag(IEEE 802.1CB Frame Replication and Elimination for Reliability)',
}