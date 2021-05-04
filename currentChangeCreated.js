function nonConstructibleChange(coins) {

	coins.sort((a, b) => a-b)
	let currentChange = 0
	let pointer = 0;
	while (pointer < coins.length){
		let coin = coins[pointer]
		if (coin > currentChange +1){
			return currentChange +1
		}
		pointer ++
		currentChange += coin;
	}
	
	return currentChange +1
}