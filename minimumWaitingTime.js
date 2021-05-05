// AlgoExpert link: https://www.algoexpert.io/questions/Minimum%20Waiting%20Time

function minimumWaitingTime(queries) {
  // Write your code here.
	// const reducer = (accum, curr) => accum + curr
	// return queries.sort((a, b) => a - b).splice(0, queries.length-1).reduce(reducer, 0)
	if (queries.length <= 1){
		return 0
	}
	let sum = 0
	let arr = []
	queries.sort((a, b) => a - b)
	for (let i = 0; i < queries.length-1; i++){
		sum += queries[i]
		arr.push(sum)
	}
	return arr.reduce((accum, curr) => accum + curr)
}