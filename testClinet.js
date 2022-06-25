const WebSocket = require('ws')
const url = 'ws://127.0.0.1:8999'

const connection = new WebSocket(url)

connection.onopen = () => {
    connection.send('Message From Client')
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error.error}`)
}

connection.onmessage = (e) => {
    console.log(e.data)
}