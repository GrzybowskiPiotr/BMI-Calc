import styles from "./FormMetric.module.css";
import { BmiCalculate } from "../../utils/BmiCalculate";
import { useEffect, useState } from "react";
export function FormMetric({ result, setHeightR }) {
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");

	useEffect(() => {
		if (height !== 0 && weight !== 0) {
			let w = weight;
			let h = height;
			result(() => BmiCalculate({ w, h }).toFixed(1));
			setHeightR(height);
		}
	}, [height, weight, result]);

	function handleChange(set, e) {
		set(e.target.value);
	}

	return (
		<div className={styles.form}>
			<form className={styles.form}>
				<label htmlFor="height">
					Height
					<span className={styles.input_container}>
						<input
							className="headingM"
							type="text"
							id="height"
							placeholder="0"
							maxLength={3}
							value={height}
							onChange={(e) => handleChange(setHeight, e)}
						/>
						<span>cm</span>
					</span>
				</label>
				<label htmlFor="weight">
					Wieght
					<span className={styles.input_container}>
						<input
							className="headingM"
							type="text"
							id="weight"
							placeholder="0"
							maxLength={3}
							value={weight}
							onChange={(e) => handleChange(setWeight, e)}
						/>
						<span>kg</span>
					</span>
				</label>
			</form>
		</div>
	);
}
