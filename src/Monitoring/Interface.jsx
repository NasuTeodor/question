import React, { useEffect, useState } from 'react'

export default function Interface() {

    // https://gist.github.com/unitycoder/a82365a93c9992f7f9631741fe007e9d
    // LINK_TYPE
    // PAYLOAD:
    //     SHOST       (SOURCE ADDR)
    //     DHOST       (DESTINATION ADDR)
    //     ETHER TYPE  (TRANSFER PROTOCOL)
    //     VLAN        (-)
    //     PAYLOAD:
                // TTL     (TIME TO LIVE)
                // SADDR   (SOURCE IP)
                // DADDR   (DESTINATION IP)
                // PROTOCOL(COMM PROTOCOL NUMBER)
                // LENGTH  (PAYLOAD LENGTH)
                // VERSION ()

    // PCAP HEADER:
    //     CAP LENGTH  (PACKET SIZE) //one of this is the original size
    //     LEN         (PACKET SIZE) //and the other one is the actual
    //     TV SEC      (RECIEVE TIME)
    //     TC USEC     (-)

    const socket = new WebSocket("ws://localhost:3005");

    const [packet, setPacket] = useState('')

    socket.addEventListener('open', () => { console.log('socket connected') })

    socket.onmessage = function (raw_data) {
        let packet = JSON.parse(raw_data.data)
        console.log(packet)
        setPacket(packet)
    }

    return (
        <>
            {packet.length !== 0 &&
                < div >
                    <div>Link Type: {packet.link_type}</div>
                    <div>Payload:<br />
                        {
                            // console.log(Object.keys(packet.payload))
                            Object.keys(packet.payload).forEach((key)=>{
                                return(<div>{key}:{packet.payload[key]}<br/></div>)
                            })
                        }
                    </div>
                </div >
            }
        </>
    )
}
