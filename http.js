import express from 'express'
import session from 'express-session'
// import { globalData } from './data.js'

const httpStart = () => {
	const app = express()
	const port = 3000

	app.use(express.static('public'))
	app.use(session())

	app.get('/createRoom', (req, res) => {
		// const roomSeed = (() => {
		//     const seed = Math.floor(10000 * Math.random())
		//     globalData.roomMap[seed]
		// })()
	})

	return app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}

export { httpStart }
