import { InputRadio } from "../InputRadio/InputRadio";
import styles from "./FormUnitType.module.css";
export function FormUnitType({ handleTypeChange, type }) {
	return (
		<form action="" className={styles.form}>
			<label htmlFor="metric">
				<InputRadio
					id="metric"
					value="metric"
					handleTypeChange={() => handleTypeChange("metric")}
					checked={type === "metric"}
				/>
				Metric
			</label>
			<label htmlFor="imperial">
				<InputRadio
					id="imperial"
					value="imperial"
					handleTypeChange={() => handleTypeChange("imperial")}
					checked={type === "imperial"}
				/>
				Imperial
			</label>
		</form>
	);
}
