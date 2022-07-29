import WebSocket, { WebSocketServer } from 'ws'

const websocketStart = (server) => {
	const wss = new WebSocketServer({ server, clientTracking: true })

	wss.on('connection', (ws) => {
		console.log(wss.clients)
		// ws.close()
		ws.on('message', (d) => {})

		ws.on('close', () => {
			console.log('close')
			ws.close()
		})
	})
}

export { websocketStart }
