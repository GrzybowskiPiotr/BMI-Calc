export function kgToSt(kg) {
	let KG = Number(kg);
	let StRate = 0.157;
	let St = KG * StRate;
	let Lbs = (KG * StRate - Math.trunc(KG * StRate)) * 14;
	return `${Math.trunc(St)}st ${Math.ceil(Lbs)}lbs`;
}
