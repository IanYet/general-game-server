import express from 'express'

const httpStart = () => {
	const app = express()
	const port = 3000

	app.use(express.static('public'))

	return app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}

export { httpStart }
