import { useEffect, useState } from "react";
import styles from "./FormImperialUnits.module.css";

import { ImperialToMetric } from "../../utils/ImperialToMetric.js";
import { BmiCalculate } from "../../utils/BmiCalculate.js";

export function FormImperialUnits({ result, setHeightR }) {
	const [height, setheight] = useState({ ft: "", in: "" });
	const [weight, setWeight] = useState({ st: "", lbs: "" });

	useEffect(() => {
		if (
			height.ft !== "" &&
			height.in !== "" &&
			weight.st !== "" &&
			weight.lbs !== ""
		) {
			let h =
				ImperialToMetric(height.ft, 30.48) + ImperialToMetric(height.in, 2.54);
			let w =
				ImperialToMetric(weight.st, 6.35) + ImperialToMetric(weight.lbs, 0.45);

			result(() => BmiCalculate({ w, h }).toFixed(1));
			setHeightR(h);
		}
	}, [height, weight, result]);

	return (
		<>
			<form className={styles.form}>
				<label htmlFor="height_ft">
					Height
					<span className={styles.imperial}>
						<span className={styles.input_container}>
							<input
								className="headingM"
								type="text"
								id="height_ft"
								placeholder="0"
								maxLength={3}
								value={height.ft}
								onChange={(e) => {
									setheight((prev) => ({ ...prev, ft: e.target.value }));
								}}
							/>
							<span>ft</span>
						</span>
						<span className={styles.input_container}>
							<input
								className="headingM"
								type="text"
								id="height_in"
								placeholder="0"
								maxLength={3}
								value={height.in}
								onChange={(e) =>
									setheight((prev) => ({ ...prev, in: e.target.value }))
								}
							/>
							<span>in</span>
						</span>
					</span>
				</label>
				<label htmlFor="weight_st">
					Wieght
					<span className={styles.imperial}>
						<span className={styles.input_container}>
							<input
								className="headingM"
								type="text"
								id="weight_st"
								placeholder="0"
								maxLength={3}
								value={weight.st}
								onChange={(e) =>
									setWeight((prev) => ({ ...prev, st: e.target.value }))
								}
							/>
							<span>st</span>
						</span>
						<span className={styles.input_container}>
							<input
								className="headingM"
								type="text"
								id="weight_lbs"
								placeholder="0"
								maxLength={3}
								value={weight.lbs}
								onChange={(e) =>
									setWeight((prev) => ({ ...prev, lbs: e.target.value }))
								}
							/>
							<span>lbs</span>
						</span>
					</span>
				</label>
			</form>
		</>
	);
}
