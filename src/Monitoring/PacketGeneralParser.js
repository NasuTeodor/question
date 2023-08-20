class PacketGeneralParser {

    packet = undefined;

    HEADER_INFO = {
        capture_time: undefined,
        relative_capture_time: undefined,
        length: undefined,
        cap_length: undefined
    }

    PAYLOAD_INFO = {
        source_host_mac: undefined,
        destination_host_mac: undefined,
        ether_type: undefined,
    }

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
            
        }
    }

}