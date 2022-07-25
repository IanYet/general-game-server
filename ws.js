import WebSocket, { WebSocketServer } from 'ws'

const websocketStart = (server) => {
	const wss = new WebSocketServer({ server })

	wss.on('connection', (ws) => {
		// console.log(server.url)
		// ws.close()
		ws.on('message', (d) => {})

		ws.on('close', () => {
			ws.close()
		})
	})
}

export { websocketStart }
