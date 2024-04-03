export function BmiCalculate({ w, h }) {
	const H = Number(h);
	const W = Number(w);
	const result = W / (H / 100) ** 2;
	return result;
}
