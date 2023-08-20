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
//        "dhost": { "addr": [121, 432, 294, 120, 0, 265] },
//        "shost": { "addr": [543, 132, 653, 321, 543, 430] },
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
//           "saddr": { "addr": [192, 168, 0, 107] },
//           "daddr": { "addr": [224, 0, 0, 251] },
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

// try finding the protocol using the HEX VALUE
export const ETHER_TYPE = [
    {
        "Decimal": "0000",
        "Hex": "0000-05DC",
        "Description": "IEEE802.3 Length Field"
    },
    {
        "Decimal": "0257",
        "Hex": "0101-01FF",
        "Description": "Experimental"
    },
    {
        "Decimal": "0512",
        "Hex": "0200",
        "Description": "XEROX PUP (see 0A00)"
    },
    {
        "Decimal": "0513",
        "Hex": "0201",
        "Description": "PUP Addr Trans (see 0A01)"
    },
    {
        "Decimal": "",
        "Hex": "0400",
        "Description": "Nixdorf"
    },
    {
        "Decimal": 1536,
        "Hex": "0600",
        "Description": "XEROX NS IDP"
    },
    {
        "Decimal": "",
        "Hex": "0660",
        "Description": "DLOG"
    },
    {
        "Decimal": "",
        "Hex": "0661",
        "Description": "DLOG"
    },
    {
        "Decimal": 2048,
        "Hex": "0800",
        "Description": "Internet Protocol version 4 (IPv4)"
    },
    {
        "Decimal": 2049,
        "Hex": "0801",
        "Description": "X.75 Internet"
    },
    {
        "Decimal": 2050,
        "Hex": "0802",
        "Description": "NBS Internet"
    },
    {
        "Decimal": 2051,
        "Hex": "0803",
        "Description": "ECMA Internet"
    },
    {
        "Decimal": 2052,
        "Hex": "0804",
        "Description": "Chaosnet"
    },
    {
        "Decimal": 2053,
        "Hex": "0805",
        "Description": "X.25 Level 3"
    },
    {
        "Decimal": 2054,
        "Hex": "0806",
        "Description": "Address Resolution Protocol (ARP)"
    },
    {
        "Decimal": 2055,
        "Hex": "0807",
        "Description": "XNS Compatability"
    },
    {
        "Decimal": 2056,
        "Hex": "0808",
        "Description": "Frame Relay ARP"
    },
    {
        "Decimal": 2076,
        "Hex": "081C",
        "Description": "Symbolics Private"
    },
    {
        "Decimal": 2184,
        "Hex": "0888-088A",
        "Description": "Xyplex"
    },
    {
        "Decimal": 2304,
        "Hex": "0900",
        "Description": "Ungermann-Bass net debugr"
    },
    {
        "Decimal": 2560,
        "Hex": "0A00",
        "Description": "Xerox IEEE802.3 PUP"
    },
    {
        "Decimal": 2561,
        "Hex": "0A01",
        "Description": "PUP Addr Trans"
    },
    {
        "Decimal": 2989,
        "Hex": "0BAD",
        "Description": "Banyan VINES"
    },
    {
        "Decimal": 2990,
        "Hex": "0BAE",
        "Description": "VINES Loopback"
    },
    {
        "Decimal": 2991,
        "Hex": "0BAF",
        "Description": "VINES Echo"
    },
    {
        "Decimal": 4096,
        "Hex": 1000,
        "Description": "Berkeley Trailer nego"
    },
    {
        "Decimal": 4097,
        "Hex": "1001-100F",
        "Description": "Berkeley Trailer encap/IP"
    },
    {
        "Decimal": 5632,
        "Hex": 1600,
        "Description": "Valid Systems"
    },
    {
        "Decimal": "",
        "Hex": "22F3",
        "Description": "TRILL"
    },
    {
        "Decimal": "",
        "Hex": "22F4",
        "Description": "L2-IS-IS"
    },
    {
        "Decimal": 16962,
        "Hex": 4242,
        "Description": "PCS Basic Block Protocol"
    },
    {
        "Decimal": 21000,
        "Hex": 5208,
        "Description": "BBN Simnet"
    },
    {
        "Decimal": 24576,
        "Hex": 6000,
        "Description": "DEC Unassigned (Exp.)"
    },
    {
        "Decimal": 24577,
        "Hex": 6001,
        "Description": "DEC MOP Dump/Load"
    },
    {
        "Decimal": 24578,
        "Hex": 6002,
        "Description": "DEC MOP Remote Console"
    },
    {
        "Decimal": 24579,
        "Hex": 6003,
        "Description": "DEC DECNET Phase IV Route"
    },
    {
        "Decimal": 24580,
        "Hex": 6004,
        "Description": "DEC LAT"
    },
    {
        "Decimal": 24581,
        "Hex": 6005,
        "Description": "DEC Diagnostic Protocol"
    },
    {
        "Decimal": 24582,
        "Hex": 6006,
        "Description": "DEC Customer Protocol"
    },
    {
        "Decimal": 24583,
        "Hex": 6007,
        "Description": "DEC LAVC, SCA"
    },
    {
        "Decimal": 24584,
        "Hex": "6008-6009",
        "Description": "DEC Unassigned"
    },
    {
        "Decimal": 24592,
        "Hex": "6010-6014",
        "Description": "3Com Corporation"
    },
    {
        "Decimal": 25944,
        "Hex": 6558,
        "Description": "Trans Ether Bridging"
    },
    {
        "Decimal": 25945,
        "Hex": 6559,
        "Description": "Raw Frame Relay"
    },
    {
        "Decimal": 28672,
        "Hex": 7000,
        "Description": "Ungermann-Bass download"
    },
    {
        "Decimal": 28674,
        "Hex": 7002,
        "Description": "Ungermann-Bass dia/loop"
    },
    {
        "Decimal": 28704,
        "Hex": "7020-7029",
        "Description": "LRT"
    },
    {
        "Decimal": 28720,
        "Hex": 7030,
        "Description": "Proteon"
    },
    {
        "Decimal": 28724,
        "Hex": 7034,
        "Description": "Cabletron"
    },
    {
        "Decimal": 32771,
        "Hex": 8003,
        "Description": "Cronus VLN"
    },
    {
        "Decimal": 32772,
        "Hex": 8004,
        "Description": "Cronus Direct"
    },
    {
        "Decimal": 32773,
        "Hex": 8005,
        "Description": "HP Probe"
    },
    {
        "Decimal": 32774,
        "Hex": 8006,
        "Description": "Nestar"
    },
    {
        "Decimal": 32776,
        "Hex": 8008,
        "Description": "AT&T"
    },
    {
        "Decimal": 32784,
        "Hex": 8010,
        "Description": "Excelan"
    },
    {
        "Decimal": 32787,
        "Hex": 8013,
        "Description": "SGI diagnostics"
    },
    {
        "Decimal": 32788,
        "Hex": 8014,
        "Description": "SGI network games"
    },
    {
        "Decimal": 32789,
        "Hex": 8015,
        "Description": "SGI reserved"
    },
    {
        "Decimal": 32790,
        "Hex": 8016,
        "Description": "SGI bounce server"
    },
    {
        "Decimal": 32793,
        "Hex": 8019,
        "Description": "Apollo Domain"
    },
    {
        "Decimal": 32814,
        "Hex": "802E",
        "Description": "Tymshare"
    },
    {
        "Decimal": 32815,
        "Hex": "802F",
        "Description": "Tigan, Inc."
    },
    {
        "Decimal": 32821,
        "Hex": 8035,
        "Description": "Reverse Address Resolution Protocol (RARP)"
    },
    {
        "Decimal": 32822,
        "Hex": 8036,
        "Description": "Aeonic Systems"
    },
    {
        "Decimal": 32824,
        "Hex": 8038,
        "Description": "DEC LANBridge"
    },
    {
        "Decimal": 32825,
        "Hex": "8039-803C",
        "Description": "DEC Unassigned"
    },
    {
        "Decimal": 32829,
        "Hex": "803D",
        "Description": "DEC Ethernet Encryption"
    },
    {
        "Decimal": 32830,
        "Hex": "803E",
        "Description": "DEC Unassigned"
    },
    {
        "Decimal": 32831,
        "Hex": "803F",
        "Description": "DEC LAN Traffic Monitor"
    },
    {
        "Decimal": 32832,
        "Hex": "8040-8042",
        "Description": "DEC Unassigned"
    },
    {
        "Decimal": 32836,
        "Hex": 8044,
        "Description": "Planning Research Corp."
    },
    {
        "Decimal": 32838,
        "Hex": 8046,
        "Description": "AT&T"
    },
    {
        "Decimal": 32839,
        "Hex": 8047,
        "Description": "AT&T"
    },
    {
        "Decimal": 32841,
        "Hex": 8049,
        "Description": "ExperData"
    },
    {
        "Decimal": 32859,
        "Hex": "805B",
        "Description": "Stanford V Kernel exp."
    },
    {
        "Decimal": 32860,
        "Hex": "805C",
        "Description": "Stanford V Kernel prod."
    },
    {
        "Decimal": 32861,
        "Hex": "805D",
        "Description": "Evans & Sutherland"
    },
    {
        "Decimal": 32864,
        "Hex": 8060,
        "Description": "Little Machines"
    },
    {
        "Decimal": 32866,
        "Hex": 8062,
        "Description": "Counterpoint Computers"
    },
    {
        "Decimal": 32869,
        "Hex": 8065,
        "Description": "Univ. of Mass. @ Amherst"
    },
    {
        "Decimal": 32870,
        "Hex": 8066,
        "Description": "Univ. of Mass. @ Amherst"
    },
    {
        "Decimal": 32871,
        "Hex": 8067,
        "Description": "Veeco Integrated Auto."
    },
    {
        "Decimal": 32872,
        "Hex": 8068,
        "Description": "General Dynamics"
    },
    {
        "Decimal": 32873,
        "Hex": 8069,
        "Description": "AT&T"
    },
    {
        "Decimal": 32874,
        "Hex": "806A",
        "Description": "Autophon"
    },
    {
        "Decimal": 32876,
        "Hex": "806C",
        "Description": "ComDesign"
    },
    {
        "Decimal": 32877,
        "Hex": "806D",
        "Description": "Computgraphic Corp."
    },
    {
        "Decimal": 32878,
        "Hex": 0,
        "Description": "Landmark Graphics Corp."
    },
    {
        "Decimal": 32890,
        "Hex": "807A",
        "Description": "Matra"
    },
    {
        "Decimal": 32891,
        "Hex": "807B",
        "Description": "Dansk Data Elektronik"
    },
    {
        "Decimal": 32892,
        "Hex": "807C",
        "Description": "Merit Internodal"
    },
    {
        "Decimal": 32893,
        "Hex": "807D-807F",
        "Description": "Vitalink Communications"
    },
    {
        "Decimal": 32896,
        "Hex": 8080,
        "Description": "Vitalink TransLAN III"
    },
    {
        "Decimal": 32897,
        "Hex": "8081-8083",
        "Description": "Counterpoint Computers"
    },
    {
        "Decimal": 32923,
        "Hex": "809B",
        "Description": "Appletalk"
    },
    {
        "Decimal": 32924,
        "Hex": "809C-809E",
        "Description": "Datability"
    },
    {
        "Decimal": 32927,
        "Hex": "809F",
        "Description": "Spider Systems Ltd."
    },
    {
        "Decimal": 32931,
        "Hex": "80A3",
        "Description": "Nixdorf Computers"
    },
    {
        "Decimal": 32932,
        "Hex": "80A4-80B3",
        "Description": "Siemens Gammasonics Inc."
    },
    {
        "Decimal": 32960,
        "Hex": "80C0-80C3",
        "Description": "DCA Data Exchange Cluster"
    },
    {
        "Decimal": 32964,
        "Hex": "80C4",
        "Description": "Banyan Systems"
    },
    {
        "Decimal": 32965,
        "Hex": "80C5",
        "Description": "Banyan Systems"
    },
    {
        "Decimal": 32966,
        "Hex": "80C6",
        "Description": "Pacer Software"
    },
    {
        "Decimal": 32967,
        "Hex": "80C7",
        "Description": "Applitek Corporation"
    },
    {
        "Decimal": 32968,
        "Hex": "80C8-80CC",
        "Description": "Intergraph Corporation"
    },
    {
        "Decimal": 32973,
        "Hex": "80CD-80CE",
        "Description": "Harris Corporation"
    },
    {
        "Decimal": 32975,
        "Hex": "80CF-80D2",
        "Description": "Taylor Instrument"
    },
    {
        "Decimal": 32979,
        "Hex": "80D3-80D4",
        "Description": "Rosemount Corporation"
    },
    {
        "Decimal": 32981,
        "Hex": "80D5",
        "Description": "IBM SNA Service on Ether"
    },
    {
        "Decimal": 32989,
        "Hex": "80DD",
        "Description": "Varian Associates"
    },
    {
        "Decimal": 32990,
        "Hex": "80DE-80DF",
        "Description": "Integrated Solutions TRFS"
    },
    {
        "Decimal": 32992,
        "Hex": "80E0-80E3",
        "Description": "Allen-Bradley"
    },
    {
        "Decimal": 32996,
        "Hex": "80E4-80F0",
        "Description": "Datability"
    },
    {
        "Decimal": 33010,
        "Hex": "80F2",
        "Description": "Retix"
    },
    {
        "Decimal": 33011,
        "Hex": "80F3",
        "Description": "AppleTalk AARP (Kinetics)"
    },
    {
        "Decimal": 33012,
        "Hex": "80F4-80F5",
        "Description": "Kinetics"
    },
    {
        "Decimal": 33015,
        "Hex": "80F7",
        "Description": "Apollo Computer"
    },
    {
        "Decimal": 33023,
        "Hex": "80FF",
        "Description": "Wellfleet Communications"
    },
    {
        "Decimal": 33024,
        "Hex": 8100,
        "Description": "Customer VLAN Tag Type (C-Tag, formerly called the Q-Tag) (initially Wellfleet)"
    },
    {
        "Decimal": 33025,
        "Hex": "8101-8103",
        "Description": "Wellfleet Communications"
    },
    {
        "Decimal": 33031,
        "Hex": "8107-8109",
        "Description": "Symbolics Private"
    },
    {
        "Decimal": 33072,
        "Hex": 8130,
        "Description": "Hayes Microcomputers"
    },
    {
        "Decimal": 33073,
        "Hex": 8131,
        "Description": "VG Laboratory Systems"
    },
    {
        "Decimal": 33074,
        "Hex": "8132-8136",
        "Description": "Bridge Communications"
    },
    {
        "Decimal": 33079,
        "Hex": "8137-8138",
        "Description": "Novell, Inc."
    },
    {
        "Decimal": 33081,
        "Hex": "8139-813D",
        "Description": "KTI"
    },
    {
        "Decimal": "",
        "Hex": 8148,
        "Description": "Logicraft"
    },
    {
        "Decimal": "",
        "Hex": 8149,
        "Description": "Network Computing Devices"
    },
    {
        "Decimal": "",
        "Hex": "814A",
        "Description": "Alpha Micro"
    },
    {
        "Decimal": 33100,
        "Hex": "814C",
        "Description": "SNMP"
    },
    {
        "Decimal": "",
        "Hex": "814D",
        "Description": "BIIN"
    },
    {
        "Decimal": "",
        "Hex": "814E",
        "Description": "BIIN"
    },
    {
        "Decimal": "",
        "Hex": "814F",
        "Description": "Technically Elite Concept"
    },
    {
        "Decimal": "",
        "Hex": 8150,
        "Description": "Rational Corp"
    },
    {
        "Decimal": "",
        "Hex": "8151-8153",
        "Description": "Qualcomm"
    },
    {
        "Decimal": "",
        "Hex": "815C-815E",
        "Description": "Computer Protocol Pty Ltd"
    },
    {
        "Decimal": "",
        "Hex": "8164-8166",
        "Description": "Charles River Data System"
    },
    {
        "Decimal": "",
        "Hex": "817D",
        "Description": "XTP"
    },
    {
        "Decimal": "",
        "Hex": "817E",
        "Description": "SGI/Time Warner prop."
    },
    {
        "Decimal": "",
        "Hex": 8180,
        "Description": "HIPPI-FP encapsulation"
    },
    {
        "Decimal": "",
        "Hex": 8181,
        "Description": "STP, HIPPI-ST"
    },
    {
        "Decimal": "",
        "Hex": 8182,
        "Description": "Reserved for HIPPI-6400"
    },
    {
        "Decimal": "",
        "Hex": 8183,
        "Description": "Reserved for HIPPI-6400"
    },
    {
        "Decimal": "",
        "Hex": "8184-818C",
        "Description": "Silicon Graphics prop."
    },
    {
        "Decimal": "",
        "Hex": "818D",
        "Description": "Motorola Computer"
    },
    {
        "Decimal": "",
        "Hex": "819A-81A3",
        "Description": "Qualcomm"
    },
    {
        "Decimal": "",
        "Hex": "81A4",
        "Description": "ARAI Bunkichi"
    },
    {
        "Decimal": "",
        "Hex": "81A5-81AE",
        "Description": "RAD Network Devices"
    },
    {
        "Decimal": "",
        "Hex": "81B7-81B9",
        "Description": "Xyplex"
    },
    {
        "Decimal": "",
        "Hex": "81CC-81D5",
        "Description": "Apricot Computers"
    },
    {
        "Decimal": "",
        "Hex": "81D6-81DD",
        "Description": "Artisoft"
    },
    {
        "Decimal": "",
        "Hex": "81E6-81EF",
        "Description": "Polygon"
    },
    {
        "Decimal": "",
        "Hex": "81F0-81F2",
        "Description": "Comsat Labs"
    },
    {
        "Decimal": "",
        "Hex": "81F3-81F5",
        "Description": "SAIC"
    },
    {
        "Decimal": "",
        "Hex": "81F6-81F8",
        "Description": "VG Analytical"
    },
    {
        "Decimal": "",
        "Hex": "8203-8205",
        "Description": "Quantum Software"
    },
    {
        "Decimal": "",
        "Hex": "8221-8222",
        "Description": "Ascom Banking Systems"
    },
    {
        "Decimal": "",
        "Hex": 0,
        "Description": "Advanced Encryption Syste"
    },
    {
        "Decimal": "",
        "Hex": "827F-8282",
        "Description": "Athena Programming"
    },
    {
        "Decimal": "",
        "Hex": "8263-826A",
        "Description": "Charles River Data System"
    },
    {
        "Decimal": "",
        "Hex": "829A-829B",
        "Description": "Inst Ind Info Tech"
    },
    {
        "Decimal": "",
        "Hex": "829C-82AB",
        "Description": "Taurus Controls"
    },
    {
        "Decimal": "",
        "Hex": "82AC-8693",
        "Description": "Walker Richer & Quinn"
    },
    {
        "Decimal": "",
        "Hex": "8694-869D",
        "Description": "Idea Courier"
    },
    {
        "Decimal": "",
        "Hex": "869E-86A1",
        "Description": "Computer Network Tech"
    },
    {
        "Decimal": "",
        "Hex": "86A3-86AC",
        "Description": "Gateway Communications"
    },
    {
        "Decimal": "",
        "Hex": "86DB",
        "Description": "SECTRA"
    },
    {
        "Decimal": "",
        "Hex": "86DE",
        "Description": "Delta Controls"
    },
    {
        "Decimal": "",
        "Hex": "86DD",
        "Description": "Internet Protocol version 6 (IPv6)"
    },
    {
        "Decimal": 34527,
        "Hex": "86DF",
        "Description": "ATOMIC"
    },
    {
        "Decimal": "",
        "Hex": "86E0-86EF",
        "Description": "Landis & Gyr Powers"
    },
    {
        "Decimal": "",
        "Hex": "8700-8710",
        "Description": "Motorola"
    },
    {
        "Decimal": 34667,
        "Hex": "876B",
        "Description": "TCP/IP Compression"
    },
    {
        "Decimal": 34668,
        "Hex": "876C",
        "Description": "IP Autonomous Systems"
    },
    {
        "Decimal": 34669,
        "Hex": "876D",
        "Description": "Secure Data"
    },
    {
        "Decimal": "",
        "Hex": 8808,
        "Description": "IEEE Std 802.3 - Ethernet Passive Optical Network (EPON)"
    },
    {
        "Decimal": 34825,
        "Hex": 8809,
        "Description": "Slow Protocols (Link Aggregation, OAM, etc.)"
    },
    {
        "Decimal": "",
        "Hex": "880B",
        "Description": "Point-to-Point Protocol (PPP)"
    },
    {
        "Decimal": "",
        "Hex": "880C",
        "Description": "General Switch Management Protocol (GSMP)"
    },
    {
        "Decimal": 34850,
        "Hex": 8822,
        "Description": "Ethernet NIC hardware and software testing"
    },
    {
        "Decimal": "",
        "Hex": 8847,
        "Description": "MPLS"
    },
    {
        "Decimal": "",
        "Hex": 8848,
        "Description": "MPLS with upstream-assigned label"
    },
    {
        "Decimal": "",
        "Hex": 8861,
        "Description": "Multicast Channel Allocation Protocol (MCAP)"
    },
    {
        "Decimal": 34915,
        "Hex": 8863,
        "Description": "PPP over Ethernet (PPPoE) Discovery Stage"
    },
    {
        "Decimal": 34916,
        "Hex": 8864,
        "Description": "PPP over Ethernet (PPPoE) Session Stage"
    },
    {
        "Decimal": 34958,
        "Hex": "888E",
        "Description": "IEEE Std 802.1X - Port-based network access control"
    },
    {
        "Decimal": 34984,
        "Hex": "88A8",
        "Description": "IEEE Std 802.1Q - Service VLAN tag identifier (S-Tag)"
    },
    {
        "Decimal": "",
        "Hex": "8A96-8A97",
        "Description": "Invisible Software"
    },
    {
        "Decimal": 34997,
        "Hex": "88B5",
        "Description": "IEEE Std 802 - Local Experimental Ethertype"
    },
    {
        "Decimal": 34998,
        "Hex": "88B6",
        "Description": "IEEE Std 802 - Local Experimental Ethertype"
    },
    {
        "Decimal": 34999,
        "Hex": "88B7",
        "Description": "IEEE Std 802 - OUI Extended Ethertype"
    },
    {
        "Decimal": 35015,
        "Hex": "88C7",
        "Description": "IEEE Std 802.11 - Pre-Authentication (802.11i)"
    },
    {
        "Decimal": 35020,
        "Hex": "88CC",
        "Description": "IEEE Std 802.1AB - Link Layer Discovery Protocol (LLDP)"
    },
    {
        "Decimal": 35045,
        "Hex": 8800000,
        "Description": "IEEE Std 802.1AE - Media Access Control Security"
    },
    {
        "Decimal": 35047,
        "Hex": 880000000,
        "Description": "Provider Backbone Bridging Instance tag"
    },
    {
        "Decimal": 35061,
        "Hex": "88F5",
        "Description": "IEEE Std 802.1Q  - Multiple VLAN Registration Protocol (MVRP)"
    },
    {
        "Decimal": 35062,
        "Hex": "88F6",
        "Description": "IEEE Std 802.1Q - Multiple Multicast Registration Protocol (MMRP)"
    },
    {
        "Decimal": 35063,
        "Hex": "88F7",
        "Description": "Precision Time Protocol"
    },
    {
        "Decimal": 35085,
        "Hex": "890D",
        "Description": "IEEE Std 802.11 - Fast Roaming Remote Request (802.11r)"
    },
    {
        "Decimal": 35095,
        "Hex": 8917,
        "Description": "IEEE Std 802.21 - Media Independent Handover Protocol"
    },
    {
        "Decimal": 35113,
        "Hex": 8929,
        "Description": "IEEE Std 802.1Qbe - Multiple I-SID Registration Protocol"
    },
    {
        "Decimal": 35131,
        "Hex": "893B",
        "Description": "TRILL Fine Grained Labeling (FGL)"
    },
    {
        "Decimal": 35136,
        "Hex": 8940,
        "Description": "IEEE Std 802.1Qbg - ECP Protocol (also used in 802.1BR)"
    },
    {
        "Decimal": 35142,
        "Hex": 8946,
        "Description": "TRILL RBridge Channel"
    },
    {
        "Decimal": 35143,
        "Hex": 8947,
        "Description": "GeoNetworking as defined in ETSI EN 302 636-4-1"
    },
    {
        "Decimal": 35151,
        "Hex": "894F",
        "Description": "NSH (Network Service Header)"
    },
    {
        "Decimal": 36864,
        "Hex": 9000,
        "Description": "Loopback"
    },
    {
        "Decimal": 36865,
        "Hex": 9001,
        "Description": "3Com(Bridge) XNS Sys Mgmt"
    },
    {
        "Decimal": 36866,
        "Hex": 9002,
        "Description": "3Com(Bridge) TCP-IP Sys"
    },
    {
        "Decimal": 36867,
        "Hex": 9003,
        "Description": "3Com(Bridge) loop detect"
    },
    {
        "Decimal": 39458,
        "Hex": "9A22",
        "Description": "Multi-Topology"
    },
    {
        "Decimal": 41197,
        "Hex": "A0ED",
        "Description": "LoWPAN encapsulation"
    },
    {
        "Decimal": 47082,
        "Hex": "B7EA",
        "Description": "The Ethertype will be used to identify a \"Channel\" in which control messages are encapsulated as payload of GRE packets. When a GRE packet tagged with the Ethertype is received, the payload will be handed to the network processor for processing."
    },
    {
        "Decimal": 65280,
        "Hex": "FF00",
        "Description": "BBN VITAL-LanBridge cache"
    },
    {
        "Decimal": "",
        "Hex": "FF00-FF0F",
        "Description": "ISC Bunker Ramo"
    },
    {
        "Decimal": 65535,
        "Hex": "FFFF",
        "Description": "Reserved"
    }
]

export const PROTOCOLS = {
    "0": {
        "Keyword": "HOPOPT",
        "Description": "IPv6 Hop-by-Hop Option"
    },
    "1": {
        "Keyword": "ICMP",
        "Description": "Internet Control Message"
    },
    "2": {
        "Keyword": "IGMP",
        "Description": "Internet Group Management"
    },
    "3": {
        "Keyword": "GGP",
        "Description": "Gateway-to-Gateway"
    },
    "4": {
        "Keyword": "IPv4",
        "Description": "IPv4 encapsulation"
    },
    "5": {
        "Keyword": "ST",
        "Description": "Stream"
    },
    "6": {
        "Keyword": "TCP",
        "Description": "Transmission Control"
    },
    "7": {
        "Keyword": "CBT",
        "Description": "CBT"
    },
    "8": {
        "Keyword": "EGP",
        "Description": "Exterior Gateway Protocol"
    },
    "9": {
        "Keyword": "IGP",
        "Description": "any private interior gateway (used by Cisco for their IGRP)"
    },
    "10": {
        "Keyword": "BBN-RCC-MON",
        "Description": "BBN RCC Monitoring"
    },
    "11": {
        "Keyword": "NVP-II",
        "Description": "Network Voice Protocol"
    },
    "12": {
        "Keyword": "PUP",
        "Description": "PUP"
    },
    "13": {
        "Keyword": "ARGUS (deprecated)",
        "Description": "ARGUS"
    },
    "14": {
        "Keyword": "EMCON",
        "Description": "EMCON"
    },
    "15": {
        "Keyword": "XNET",
        "Description": "Cross Net Debugger"
    },
    "16": {
        "Keyword": "CHAOS",
        "Description": "Chaos"
    },
    "17": {
        "Keyword": "UDP",
        "Description": "User Datagram"
    },
    "18": {
        "Keyword": "MUX",
        "Description": "Multiplexing"
    },
    "19": {
        "Keyword": "DCN-MEAS",
        "Description": "DCN Measurement Subsystems"
    },
    "20": {
        "Keyword": "HMP",
        "Description": "Host Monitoring"
    },
    "21": {
        "Keyword": "PRM",
        "Description": "Packet Radio Measurement"
    },
    "22": {
        "Keyword": "XNS-IDP",
        "Description": "XEROX NS IDP"
    },
    "23": {
        "Keyword": "TRUNK-1",
        "Description": "Trunk-1"
    },
    "24": {
        "Keyword": "TRUNK-2",
        "Description": "Trunk-2"
    },
    "25": {
        "Keyword": "LEAF-1",
        "Description": "Leaf-1"
    },
    "26": {
        "Keyword": "LEAF-2",
        "Description": "Leaf-2"
    },
    "27": {
        "Keyword": "RDP",
        "Description": "Reliable Data Protocol"
    },
    "28": {
        "Keyword": "IRTP",
        "Description": "Internet Reliable Transaction"
    },
    "29": {
        "Keyword": "ISO-TP4",
        "Description": "ISO Transport Protocol Class 4"
    },
    "30": {
        "Keyword": "NETBLT",
        "Description": "Bulk Data Transfer Protocol"
    },
    "31": {
        "Keyword": "MFE-NSP",
        "Description": "MFE Network Services Protocol"
    },
    "32": {
        "Keyword": "MERIT-INP",
        "Description": "MERIT Internodal Protocol"
    },
    "33": {
        "Keyword": "DCCP",
        "Description": "Datagram Congestion Control Protocol"
    },
    "34": {
        "Keyword": "3PC",
        "Description": "Third Party Connect Protocol"
    },
    "35": {
        "Keyword": "IDPR",
        "Description": "Inter-Domain Policy Routing Protocol"
    },
    "36": {
        "Keyword": "XTP",
        "Description": "XTP"
    },
    "37": {
        "Keyword": "DDP",
        "Description": "Datagram Delivery Protocol"
    },
    "38": {
        "Keyword": "IDPR-CMTP",
        "Description": "IDPR Control Message Transport Proto"
    },
    "39": {
        "Keyword": "TP++",
        "Description": "TP++ Transport Protocol"
    },
    "40": {
        "Keyword": "IL",
        "Description": "IL Transport Protocol"
    },
    "41": {
        "Keyword": "IPv6",
        "Description": "IPv6 encapsulation"
    },
    "42": {
        "Keyword": "SDRP",
        "Description": "Source Demand Routing Protocol"
    },
    "43": {
        "Keyword": "IPv6-Route",
        "Description": "Routing Header for IPv6"
    },
    "44": {
        "Keyword": "IPv6-Frag",
        "Description": "Fragment Header for IPv6"
    },
    "45": {
        "Keyword": "IDRP",
        "Description": "Inter-Domain Routing Protocol"
    },
    "46": {
        "Keyword": "RSVP",
        "Description": "Reservation Protocol"
    },
    "47": {
        "Keyword": "GRE",
        "Description": "Generic Routing Encapsulation"
    },
    "48": {
        "Keyword": "DSR",
        "Description": "Dynamic Source Routing Protocol"
    },
    "49": {
        "Keyword": "BNA",
        "Description": "BNA"
    },
    "50": {
        "Keyword": "ESP",
        "Description": "Encap Security Payload"
    },
    "51": {
        "Keyword": "AH",
        "Description": "Authentication Header"
    },
    "52": {
        "Keyword": "I-NLSP",
        "Description": "Integrated Net Layer Security  TUBA"
    },
    "53": {
        "Keyword": "SWIPE (deprecated)",
        "Description": "IP with Encryption"
    },
    "54": {
        "Keyword": "NARP",
        "Description": "NBMA Address Resolution Protocol"
    },
    "55": {
        "Keyword": "MOBILE",
        "Description": "IP Mobility"
    },
    "56": {
        "Keyword": "TLSP",
        "Description": "Transport Layer Security Protocol using Kryptonet key management"
    },
    "57": {
        "Keyword": "SKIP",
        "Description": "SKIP"
    },
    "58": {
        "Keyword": "IPv6-ICMP",
        "Description": "ICMP for IPv6"
    },
    "59": {
        "Keyword": "IPv6-NoNxt",
        "Description": "No Next Header for IPv6"
    },
    "60": {
        "Keyword": "IPv6-Opts",
        "Description": "Destination Options for IPv6"
    },
    "61": {
        "Keyword": "",
        "Description": "any host internal protocol"
    },
    "62": {
        "Keyword": "CFTP",
        "Description": "CFTP"
    },
    "63": {
        "Keyword": "",
        "Description": "any local network"
    },
    "64": {
        "Keyword": "SAT-EXPAK",
        "Description": "SATNET and Backroom EXPAK"
    },
    "65": {
        "Keyword": "KRYPTOLAN",
        "Description": "Kryptolan"
    },
    "66": {
        "Keyword": "RVD",
        "Description": "MIT Remote Virtual Disk Protocol"
    },
    "67": {
        "Keyword": "IPPC",
        "Description": "Internet Pluribus Packet Core"
    },
    "68": {
        "Keyword": "",
        "Description": "any distributed file system"
    },
    "69": {
        "Keyword": "SAT-MON",
        "Description": "SATNET Monitoring"
    },
    "70": {
        "Keyword": "VISA",
        "Description": "VISA Protocol"
    },
    "71": {
        "Keyword": "IPCV",
        "Description": "Internet Packet Core Utility"
    },
    "72": {
        "Keyword": "CPNX",
        "Description": "Computer Protocol Network Executive"
    },
    "73": {
        "Keyword": "CPHB",
        "Description": "Computer Protocol Heart Beat"
    },
    "74": {
        "Keyword": "WSN",
        "Description": "Wang Span Network"
    },
    "75": {
        "Keyword": "PVP",
        "Description": "Packet Video Protocol"
    },
    "76": {
        "Keyword": "BR-SAT-MON",
        "Description": "Backroom SATNET Monitoring"
    },
    "77": {
        "Keyword": "SUN-ND",
        "Description": "SUN ND PROTOCOL-Temporary"
    },
    "78": {
        "Keyword": "WB-MON",
        "Description": "WIDEBAND Monitoring"
    },
    "79": {
        "Keyword": "WB-EXPAK",
        "Description": "WIDEBAND EXPAK"
    },
    "80": {
        "Keyword": "ISO-IP",
        "Description": "ISO Internet Protocol"
    },
    "81": {
        "Keyword": "VMTP",
        "Description": "VMTP"
    },
    "82": {
        "Keyword": "SECURE-VMTP",
        "Description": "SECURE-VMTP"
    },
    "83": {
        "Keyword": "VINES",
        "Description": "VINES"
    },
    "84": {
        "Keyword": "IPTM",
        "Description": "Internet Protocol Traffic Manager"
    },
    "85": {
        "Keyword": "NSFNET-IGP",
        "Description": "NSFNET-IGP"
    },
    "86": {
        "Keyword": "DGP",
        "Description": "Dissimilar Gateway Protocol"
    },
    "87": {
        "Keyword": "TCF",
        "Description": "TCF"
    },
    "88": {
        "Keyword": "EIGRP",
        "Description": "EIGRP"
    },
    "89": {
        "Keyword": "OSPFIGP",
        "Description": "OSPFIGP"
    },
    "90": {
        "Keyword": "Sprite-RPC",
        "Description": "Sprite RPC Protocol"
    },
    "91": {
        "Keyword": "LARP",
        "Description": "Locus Address Resolution Protocol"
    },
    "92": {
        "Keyword": "MTP",
        "Description": "Multicast Transport Protocol"
    },
    "93": {
        "Keyword": "AX.25",
        "Description": "AX.25 Frames"
    },
    "94": {
        "Keyword": "IPIP",
        "Description": "IP-within-IP Encapsulation Protocol"
    },
    "95": {
        "Keyword": "MICP (deprecated)",
        "Description": "Mobile Internetworking Control Pro."
    },
    "96": {
        "Keyword": "SCC-SP",
        "Description": "Semaphore Communications Sec. Pro."
    },
    "97": {
        "Keyword": "ETHERIP",
        "Description": "Ethernet-within-IP Encapsulation"
    },
    "98": {
        "Keyword": "ENCAP",
        "Description": "Encapsulation Header"
    },
    "99": {
        "Keyword": "",
        "Description": "any private encryption scheme"
    },
    "100": {
        "Keyword": "GMTP",
        "Description": "GMTP"
    },
    "101": {
        "Keyword": "IFMP",
        "Description": "Ipsilon Flow Management Protocol"
    },
    "102": {
        "Keyword": "PNNI",
        "Description": "PNNI over IP"
    },
    "103": {
        "Keyword": "PIM",
        "Description": "Protocol Independent Multicast"
    },
    "104": {
        "Keyword": "ARIS",
        "Description": "ARIS"
    },
    "105": {
        "Keyword": "SCPS",
        "Description": "SCPS"
    },
    "106": {
        "Keyword": "QNX",
        "Description": "QNX"
    },
    "107": {
        "Keyword": "A/N",
        "Description": "Active Networks"
    },
    "108": {
        "Keyword": "IPComp",
        "Description": "IP Payload Compression Protocol"
    },
    "109": {
        "Keyword": "SNP",
        "Description": "Sitara Networks Protocol"
    },
    "110": {
        "Keyword": "Compaq-Peer",
        "Description": "Compaq Peer Protocol"
    },
    "111": {
        "Keyword": "IPX-in-IP",
        "Description": "IPX in IP"
    },
    "112": {
        "Keyword": "VRRP",
        "Description": "Virtual Router Redundancy Protocol"
    },
    "113": {
        "Keyword": "PGM",
        "Description": "PGM Reliable Transport Protocol"
    },
    "114": {
        "Keyword": "",
        "Description": "any 0-hop protocol"
    },
    "115": {
        "Keyword": "L2TP",
        "Description": "Layer Two Tunneling Protocol"
    },
    "116": {
        "Keyword": "DDX",
        "Description": "D-II Data Exchange (DDX)"
    },
    "117": {
        "Keyword": "IATP",
        "Description": "Interactive Agent Transfer Protocol"
    },
    "118": {
        "Keyword": "STP",
        "Description": "Schedule Transfer Protocol"
    },
    "119": {
        "Keyword": "SRP",
        "Description": "SpectraLink Radio Protocol"
    },
    "120": {
        "Keyword": "UTI",
        "Description": "UTI"
    },
    "121": {
        "Keyword": "SMP",
        "Description": "Simple Message Protocol"
    },
    "122": {
        "Keyword": "SM (deprecated)",
        "Description": "Simple Multicast Protocol"
    },
    "123": {
        "Keyword": "PTP",
        "Description": "Performance Transparency Protocol"
    },
    "124": {
        "Keyword": "ISIS over IPv4",
        "Description": ""
    },
    "125": {
        "Keyword": "FIRE",
        "Description": ""
    },
    "126": {
        "Keyword": "CRTP",
        "Description": "Combat Radio Transport Protocol"
    },
    "127": {
        "Keyword": "CRUDP",
        "Description": "Combat Radio User Datagram"
    },
    "128": {
        "Keyword": "SSCOPMCE",
        "Description": ""
    },
    "129": {
        "Keyword": "IPLT",
        "Description": ""
    },
    "130": {
        "Keyword": "SPS",
        "Description": "Secure Packet Shield"
    },
    "131": {
        "Keyword": "PIPE",
        "Description": "Private IP Encapsulation within IP"
    },
    "132": {
        "Keyword": "SCTP",
        "Description": "Stream Control Transmission Protocol"
    },
    "133": {
        "Keyword": "FC",
        "Description": "Fibre Channel"
    },
    "134": {
        "Keyword": "RSVP-E2E-IGNORE",
        "Description": ""
    },
    "135": {
        "Keyword": "Mobility Header",
        "Description": ""
    },
    "136": {
        "Keyword": "UDPLite",
        "Description": ""
    },
    "137": {
        "Keyword": "MPLS-in-IP",
        "Description": ""
    },
    "138": {
        "Keyword": "manet",
        "Description": "MANET Protocols"
    },
    "139": {
        "Keyword": "HIP",
        "Description": "Host Identity Protocol"
    },
    "140": {
        "Keyword": "Shim6",
        "Description": "Shim6 Protocol"
    },
    "141": {
        "Keyword": "WESP",
        "Description": "Wrapped Encapsulating Security Payload"
    },
    "142": {
        "Keyword": "ROHC",
        "Description": "Robust Header Compression"
    },
    "143": {
        "Keyword": "Ethernet",
        "Description": "Ethernet"
    },
    "144": {
        "Keyword": "AGGFRAG",
        "Description": "AGGFRAG encapsulation payload for ESP"
    },
    "145": {
        "Keyword": "NSH",
        "Description": "Network Service Header"
    },
    "253": {
        "Keyword": "",
        "Description": "Use for experimentation and testing"
    },
    "254": {
        "Keyword": "",
        "Description": "Use for experimentation and testing"
    },
    "255": {
        "Keyword": "Reserved",
        "Description": ""
    },
    "146-252": {
        "Keyword": "",
        "Description": "Unassigned"
    }
}