import styles from "./Result.module.css";
import { BmiClassyfication } from "../../utils/BmiClassyfication.js";
import { kgToSt } from "../../utils/kgToSt.js";
export function Result({ result, height, type }) {
	let calculated = result > 0 && result !== "Infinity";
	let range = "";

	function WeightRangeBaseOnHeight(height) {
		const bimL = 18.5;
		const bimH = 24.9;

		let weightH = (bimH * (height / 100) ** 2).toFixed(1);
		let weightL = (bimL * (height / 100) ** 2).toFixed(2);

		if (type === "metric") {
			return `${weightL} kg - ${weightH} kg`;
		} else if (type === "imperial") {
			return `${kgToSt(weightL)} - ${kgToSt(weightH)}`;
		}
	}

	if (calculated) {
		BmiClassyfication(result);
		range = WeightRangeBaseOnHeight(height);
	}

	return (
		<div className={styles.container}>
			{!calculated && <h2 className="headingM">Welcom!</h2>}
			{calculated && (
				<div id={styles.bmiResult}>
					<div className={styles.yourBMI}>
						<h3>Your BMI is...</h3>
						<p>
							<span>{result}</span>
						</p>
					</div>
					<div className={styles.descryption}>
						<p>
							Your BMI suggests you’re a {" "}
							<span id={styles.bmi_classification}>
								{BmiClassyfication(result)}
							</span>
							. Your ideal weight is between
							<b> {range}</b>
						</p>
					</div>
				</div>
			)}

			{!calculated && (
				<p>Enter your height and weight and you’ll see your BMI result here</p>
			)}
		</div>
	);
}
