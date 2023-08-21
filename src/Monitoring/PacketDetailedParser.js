class PacketDetailedParser {

    // FULL PACKET
    packet = undefined;

    // LINK TYPE
    LINK_TYPE = undefined;

    // HEADER INFO
    HEADER_INFO = {
        capture_time: undefined,
        realtive_capture_time: undefined,
        length: undefined,
        cap_length: undefined,
    }

    //PAYLOAD INFO
    PAYLOAD_INFO = {
        vlan: undefined,
        source_host_mac: undefined,
        destination_host_mac: undefined,
        ether_type: undefined,
    }
    //PAYLOAD DATA
    //MAY BE DIFFERENT BASED ON PROTOCOL
    //SAVE GENERAL DATA or more idk you do yours
    PAYLOAD_DATA = {
        identification: undefined,      //not always
        version: undefined,
        protocol: undefined,
        ttl: undefined,                 //not always
        source_address: undefined,
        destination_address: undefined,
        header_length: undefined,       //not always
        header_checksum: undefined,     //not always
        payload_length: undefined,      //not always
        payload_checksum: undefined,    //not always
        payload: {
            //ADD ARP DATA?
            source_port: undefined,
            destination_port: undefined,
            header_length: undefined,
            data_length: undefined,
            checksum: undefined,
            data: [],
            flags: {
                ack: undefined,
                cwr: undefined,
                ece: undefined,
                fin: undefined,
                nonce: undefined,
                psh: undefined,
                rst: undefined,
                syn: undefined,
                urg: undefined,
            },
            ackno: undefined,
            seqno: undefined,
        },
        flags: {
            reserved: undefined,
            doNotFragment: undefined,
            moreFragments: undefined,
        },
        fragmentOffset: undefined,
    }

    constructor(packet) {
        
    }

}