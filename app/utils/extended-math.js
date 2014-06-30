export function percentFromRange (high, low, num) {
	return ( ( num - low ) / ( high - low ) ) * 100;
}

export function toNearest (nearest, num, restrict, useCeil) {
	var toRound = ( num / nearest ),
		rounded = ( ( useCeil ) ? Math.ceil(toRound) : Math.round(toRound) ) * nearest;
	if(restrict && typeof restrict.low === "number" && typeof restrict.high === "number") {
		rounded = (rounded > restrict.high) ? restrict.high : (rounded < restrict.low) ? restrict.low : rounded;
	}
	return rounded;
}