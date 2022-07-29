import { globalData } from './data.js'

const createRoomSeed = (limit, owner) => {
	const seed = Math.floor(10000 * Math.random())

	if (globalData.roomMap[seed]) {
		return createRoomSeed()
	}

	globalData.roomMap[seed] = {
		seed,
		limit,
		players: [owner],
		timer: setTimeout(() => delete globalData.roomMap[seed], 600_000),
	}
	return seed
}

export { createRoomSeed }
