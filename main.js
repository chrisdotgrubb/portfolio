const URL = 'https://calcifer-api.onrender.com/api/items'

async function checkServer() {
	try {
		const response = await fetch(URL)
		if (response.status === 200) {
			console.log('API already running')
		} else {
			console.log('Starting capstone API...')
		}
	} catch (err) {
		console.error(err)
	}
}

checkServer()