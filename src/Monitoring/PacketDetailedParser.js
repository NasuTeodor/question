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
    PAYLOAD_DATA = {
        identification: undefined,
        version: undefined,
        protocol: undefined,
        ttl: undefined,
        source_address: undefined,
        destination_address: undefined,
        header_length: undefined,
        header_checksum: undefined,
        payload_length: undefined,
        payload_checksum: undefined,
        payload: {
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