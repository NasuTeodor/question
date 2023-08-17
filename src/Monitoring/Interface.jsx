import React, { useEffect, useState } from 'react'

export default function Interface() {

    const socket = new WebSocket("ws://localhost:3005");
    const [mess, setMess] = useState('')

    socket.addEventListener('open', () => { console.log('socket connected') })
    // socket.addEventListener('data', (raw_data) => { setMess(raw_data) })

    // socket.onmessage = function (raw_data) { setMess(raw_data) }
    socket.on('message', function message(raw_data) {
        setMess(raw_data)
    })

    return (
        <div>{mess}</div>
    )
}
