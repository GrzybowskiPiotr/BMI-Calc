export function BmiClassyfication(bmi) {
	if (bmi < 18.5) {
		return "Underweight";
	}
	if (bmi > 18.6 && bmi < 24.9) {
		return "Healthy weight";
	}
	if (bmi > 25 && bmi < 29.9) {
		return "Overweight";
	}
	if (bmi > 30) {
		return "Obese";
	}
}
