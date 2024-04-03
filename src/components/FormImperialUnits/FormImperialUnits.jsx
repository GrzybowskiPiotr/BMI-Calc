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
			<form action="" className={styles.form}>
				<label htmlFor="height_ft">
					Height
					<div className={styles.imperial}>
						<div className={styles.input_container}>
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
							<p>ft</p>
						</div>
						<div className={styles.input_container}>
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
							<p>in</p>
						</div>
					</div>
				</label>
				<label htmlFor="weight_st">
					Wieght
					<div className={styles.imperial}>
						<div className={styles.input_container}>
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
							<p>st</p>
						</div>
						<div className={styles.input_container}>
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
							<p>lbs</p>
						</div>
					</div>
				</label>
			</form>
		</>
	);
}
