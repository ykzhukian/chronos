export function currentTime() {
	const now = new Date()
	now.getHours() * 60 + now.getMinutes()
}
