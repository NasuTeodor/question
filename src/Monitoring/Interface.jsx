import React, { useEffect, useState } from 'react'
import { SOCKET_CONNECT_STATES } from './Values'

export default function Interface() {

    const [socket, setSocket] = useState('')
    const [packet, setPacket] = useState('')

    const [packetStream, setPacketStream] = useState({})

    const handlePacket = (socket_data) => {
        let packet = JSON.parse(socket_data.data)
        console.log(packet)
        //procces packets with general parser
    }

    useEffect(() => {
        if (socket === '')
            setSocket(new WebSocket('ws://localhost:3005'))
        else {
            // console.log(socket)
            socket.onerror = function (error) { console.log(`[SOCKET ERROR]: ${SOCKET_CONNECT_STATES[error.target.readyState]}`) }
            socket.onopen = function (server) { console.log(`[SOCKET CONN]: "${server.target.url}"`) }
            socket.onmessage = handlePacket
        }
    }, [socket])

    return (
        <>
            {
                < div >
                    {/* <div>Link Type: {packet.link_type}</div> */}
                    <div>Payload:<br />
                    </div>
                </div >
            }
        </>
    )
}
