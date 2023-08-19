import React, { useEffect, useState } from 'react'
import { SOCKET_CONNECT_STATES } from './Values'

export default function Interface() {

    const [socket, setSocket] = useState('')
    const [packet, setPacket] = useState('')

    const handlePacket = (socket_data) => {
        let packet = JSON.parse(socket_data.data)
        console.log(JSON.stringify(packet))
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
            {packet.length == 'mama' &&
                < div >
                    <div>Link Type: {packet.link_type}</div>
                    <div>Payload:<br />
                        {
                            // console.log(Object.keys(packet.payload))
                            Object.keys(packet.payload).forEach((key) => {
                                return (<div>{key}:{packet.payload[key]}<br /></div>)
                            })
                        }
                    </div>
                </div >
            }
        </>
    )
}
